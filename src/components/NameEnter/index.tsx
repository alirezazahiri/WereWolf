import React, { useRef, useEffect, useState } from 'react';
import styles from "./NameEnter.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/store';
import { getNameEnter } from '../../services/getPageData';
import { addName, resetPlayers } from '../../redux/players/playersActions';
import Name from './Name';
import toFarsiNumber from '../../services/convertNumbersToFa';
import showToast from '../../services/showToast';
import { NAME_ENTER_ERROR_FA, NAME_ENTER_ERROR_EN } from '../../translations/Toaster/toast-messages';

const NameEnter = () => {
    const dispatch = useDispatch()
    const { language, names, playersCount } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState
    }))

    const { buttons, unknown } = getNameEnter(language);
    const [name, setName] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    const checkName = (): string | undefined => {
        if (!name) {
            return `${unknown} ${language === "persian" ?
                toFarsiNumber(`${names.length + 1}`) : names.length + 1}`
        } else if (names.includes(name)) {
            const message = language === "persian" ?
                NAME_ENTER_ERROR_FA : NAME_ENTER_ERROR_EN
            showToast('error', message)
            return
        }
        return name
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const checkedName = checkName()
        if (checkedName)
            dispatch(addName(checkedName))
    }

    const resetHandler = () => {
        dispatch(resetPlayers())
    }

    return (
        <div className={styles.container}>
            <button
                className={styles.resetButton}
                type="button"
                onClick={resetHandler}
            >
                {buttons.reset}
            </button>
            <div>
                {names.map((name, index) => <Name key={`${index + 1}`} name={name} index={index} />)}
            </div>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <input
                    ref={inputRef}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={playersCount - names.length === 0}
                // disable the add button, when all players added
                >
                    {buttons.add}
                </button>
            </form>
        </div>
    );
};

export default NameEnter;