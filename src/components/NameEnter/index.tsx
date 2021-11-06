import React, { useRef, useEffect, useState } from 'react';
import styles from "./NameEnter.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/store';
import { getNameEnter } from '../../services/getPageData';
import { addName, resetPlayers } from '../../redux/players/playersActions';
import Name from './Name';
import checkName from '../../services/checkName';

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
        inputRef.current?.select()
    }, [names]);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const checkedName = checkName(names, name.trim(), unknown, language)
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