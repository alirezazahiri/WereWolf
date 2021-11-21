import React, {
    ChangeEvent,
    FC,
    FormEvent,
    useEffect,
    useRef,
    useState
} from 'react';

// react-redux 
import { useDispatch, useSelector } from 'react-redux';

// redux store
import { AppState } from '../../redux/store';
import styles from "./Name.module.css"
import { editName } from '../../redux/players/playersActions';

// services 
import { shorten } from '../../services/shorten';
import checkName from '../../services/checkName';

// components 
import Icon from '../Icon';
import { changeDataDictionary, editPlayerData } from '../../redux/playersData/playersDataActions';

type Props = {
    name: string,
    index: number,
}

const Name: FC<Props> = ({ name, index }) => {
    const dispatch = useDispatch()
    const { language, names, dataDictionary } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState,
        ...state.playersDataState
    }))
    const [canEdit, setCanEdit] = useState(false)
    const [newName, setNewName] = useState(name)
    const [currentName, setCurrentName] = useState(name);

    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNewName(value);
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const checkedName = checkName(names, newName.trim(), "unknown", language, name.trim())
        if (checkedName) {
            dispatch(editName(newName, index))
            dispatch(changeDataDictionary(newName, {...dataDictionary[name], text: "", alive: true, unmute: true}))
            dispatch(editPlayerData(name, newName))
            setCanEdit(false)
            setCurrentName(newName)
        }
    }

    useEffect(() => {
        if (canEdit) {
            inputRef.current?.select();
        }
    }, [canEdit]);

    return (
        <div className={styles.container}>
            <div className={styles.nameIndexContainer}>
                <span>
                    <Icon icon="user" />
                </span>
                {canEdit ? (
                    <form onSubmit={submitHandler} className={styles.formContainer}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={newName}
                            onChange={changeHandler}
                        />
                        <button type="submit">
                            {language === "persian" ? "ثبت" : "submit"}
                        </button>
                    </form>
                ) : (
                    <h3>{shorten(currentName)}</h3>
                )}
            </div>
            <button className={styles.editButton} onClick={() => setCanEdit((prevStatus) => !prevStatus)}>
                <Icon icon="edit fa-2x" />
            </button>
        </div>
    );
};

export default Name;