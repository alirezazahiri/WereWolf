import React, { FC, useEffect } from 'react';
import showToast from '../../services/showToast';
import { useNavigate } from 'react-router-dom';
import styles from "./HeaderButtons.module.css"
import {
    MODAL_HEADER_SUCCESS_CHARS_FA,
    MODAL_HEADER_SUCCESS_CHARS_EN
} from '../../translations/Toaster/toast-messages';
import {
    MODAL_HEADER_ERROR_FA,
    MODAL_HEADER_ERROR_EN,
    MODAL_HEADER_SUCCESS_FA,
    MODAL_HEADER_SUCCESS_EN,
    MODAL_HEADER_ERROR_CHAR_FA,
    MODAL_HEADER_ERROR_CHAR_EN
} from '../../translations/Toaster/toast-messages';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { createDataDictionary, createRoleDictionary, updateRoleDictionary } from '../../redux/playersData/playersDataActions';

type Props = {
    language: string,
    remaining: any,
    type: string,
    buttons: {
        close: string,
        back_to_name_enter: string,
        start: string,
        go_to_char_select: string,
    },
    closeHandler?: (() => void),
    backHandler?: (() => void),
    gotoCharSelect?: (() => void),
    startGame?: (() => void)
}

const HeaderButtons: FC<Props> = ({
    language,
    remaining,
    type,
    buttons,
    closeHandler,
    backHandler,
    gotoCharSelect,
    startGame
}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { names, characters } = useSelector((state: AppState) => ({
        ...state.charactersState,
        ...state.playersState
    }))

    const handleGoto = () => {
        if (gotoCharSelect) {
            if (remaining !== 0) {
                const message = language === "persian" ?
                    MODAL_HEADER_ERROR_FA : MODAL_HEADER_ERROR_EN
                showToast('error', message(remaining))
            }
            else {
                const message = language === "persian" ?
                    MODAL_HEADER_SUCCESS_FA : MODAL_HEADER_SUCCESS_EN
                showToast('success', message)
                dispatch(createRoleDictionary(names))
                dispatch(createDataDictionary(names))
                gotoCharSelect()
            }
        }
    }

    const handleStart = () => {
        if (startGame) {
            if (remaining !== 0) {
                const message = language === "persian" ?
                    MODAL_HEADER_ERROR_CHAR_FA : MODAL_HEADER_ERROR_CHAR_EN
                showToast('error', message(remaining))
            }
            else {
                const message = language === "persian" ?
                    MODAL_HEADER_SUCCESS_CHARS_FA : MODAL_HEADER_SUCCESS_CHARS_EN
                showToast('success', message)
                dispatch(updateRoleDictionary(names, characters))
                navigate("/players-roles")
                startGame()
            }
        }
    }

    useEffect(() => {
        if (remaining === 0 && type==="nameEnter")
            showToast("success", buttons.go_to_char_select)
        else if (remaining === 0 && type==="charSelect")
            showToast("success", buttons.start)
    }, [
        remaining,
        buttons.start,
        buttons.go_to_char_select,
        type
    ])

    return (
        <>
            {type === "nameEnter" &&
                <button className={styles.goto} onClick={handleGoto}>
                    {buttons.go_to_char_select}
                </button>
            }
            {type === "charSelect" &&
                <>
                    <button className={styles.back} onClick={backHandler}>
                        {buttons.back_to_name_enter}
                    </button>
                    <button className={styles.start} onClick={handleStart}>
                        {buttons.start}
                    </button>
                </>
            }
            <button className={styles.close} onClick={closeHandler}>
                {buttons.close}
            </button>
        </>
    );
};

export default HeaderButtons;