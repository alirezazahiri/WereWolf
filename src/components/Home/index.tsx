import { FC, useState, useEffect, useRef } from 'react';

// navigate 
import { useNavigate } from 'react-router-dom';

// redux 
import { AppState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';


// services 
import { getHome } from '../../services/getPageData';
import fixNumbers from '../../services/convertNumbersToEn';

// styles 
import styles from "./Home.module.css"
import { setCountOfPlayers } from '../../redux/players/playersActions';

const Home: FC = () => {
    const dispatch = useDispatch()
    const { language } = useSelector((state: AppState) => state.languageState)

    const {
        title,
        description,
        placeholder_1,
        start } = getHome(language);


    const [disable, setDisable] = useState(false);
    const [playersCount, setPlayersCount] = useState("");

    const navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    useEffect(() => {
        const value = fixNumbers(playersCount);
        if (playersCount) {
            if (/^\d+$/.test(value)) {
                // check if value is a numeric string
                if (Number(value) >= 4 && Number(value) <= 80) {
                    setDisable(false);
                } else {
                    setDisable(true);
                }
            }
        } else {
            setDisable(true);
        }
    }, [playersCount]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newValue = fixNumbers(value);
        if (/^\d*$/.test(newValue)) setPlayersCount(value); // set newValue if it is a empty string or a number
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!disable) {
            dispatch(setCountOfPlayers(fixNumbers(playersCount)))
            navigate("/game-setup");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div>
                <form onSubmit={submitHandler} className={styles.formContainer}>
                    <input
                        ref={inputRef}
                        pattern="\d*"
                        type="text"
                        placeholder={placeholder_1}
                        value={playersCount}
                        onChange={changeHandler}
                    />
                    <button type="submit" disabled={disable}>
                        {start}
                    </button>
                </form>
            </div>
            <p style={{ color: "rgb(100)" }}>
                All rights reserved by Alireza Zahiri&copy;
            </p>
        </div>
    );
};

export default Home;