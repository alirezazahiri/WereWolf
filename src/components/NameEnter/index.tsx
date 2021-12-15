import React, { useRef, useEffect, useState, FC } from 'react';

// react-redux 
import { useSelector, useDispatch } from 'react-redux';

// state type 
import { AppState } from '../../redux/store';

// redux actions 
import { addName, resetPlayers } from '../../redux/players/playersActions';

// components 
import Name from './Name';

// services
import { getNameEnter } from '../../services/getPageData';
import checkName from '../../services/checkName';

// styles 
import styles from "./NameEnter.module.css"

type Props = {
    countOfPlayers?: number
}

const NameEnter: FC<Props> = ({ countOfPlayers }) => {
    const dispatch = useDispatch()
    const { language, names, playersCount } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState
    }))
    const remaining = (countOfPlayers ? countOfPlayers : playersCount) - names.length

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
        if (checkedName && !(remaining === 0))
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
                {names.map((name, index) => (
                    <Name
                        key={`${index + 1}`}
                        name={name}
                        index={index}
                    />
                ))}
            </div>
            <form
                onSubmit={submitHandler}
                className={styles.formContainer}
                style={{ display: `${remaining === 0 ? "none" : ""}` }}
            >
                <input
                    ref={inputRef}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button
                    className={styles.submitButton}
                    type="submit"
                >
                    {buttons.add}
                </button>
            </form>
        </div>
    );
};

export default NameEnter;