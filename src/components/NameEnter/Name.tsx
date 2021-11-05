import React, { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import { shorten } from '../../services/shorten';

import styles from "./Name.module.css"
import { useDispatch } from 'react-redux';
import { editName } from '../../redux/players/playersActions';

type Props = {
    name: string,
    index: number,
}

const Name: FC<Props> = ({ name, index }) => {
    const dispatch = useDispatch()
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
        dispatch(editName(newName, index))
        setCanEdit(false)
        setCurrentName(newName)
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
                    <i className="fa fa-user"></i>
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
                            submit
                        </button>
                    </form>
                ) : (
                    <h1>{shorten(currentName)}</h1>
                )}
            </div>
            <i
                className='fa fa-edit'
                onClick={() => setCanEdit((prevStatus) => !prevStatus)}
            ></i>
        </div>
    );
};

export default Name;