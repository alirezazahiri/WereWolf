import React, { useRef, useEffect, useState } from 'react';
import styles from "./NameEnter.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/store';
import { getNameEnter } from '../../services/getPageData';
import { addName, resetPlayers } from '../../redux/players/playersActions';

const NameEnter = () => {
    const dispatch = useDispatch()
    const {language, names} = useSelector((state: AppState) => ({...state.languageState, ...state.playersState}))

    console.log(names)

    const { buttons, unknown } = getNameEnter(language);
    const [name, setName] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addName(name.trim() ? name : unknown))
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
                    // disabled={playersCount - names.length === 0} // disable the add button, when all players added
                >
                    {buttons.add}
                </button>
            </form>
        </div>
    );
};

export default NameEnter;