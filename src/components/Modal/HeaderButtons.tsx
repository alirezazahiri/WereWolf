import React, { FC } from 'react';
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
                navigate("/players-roles")
                startGame()
            }
        }
    }

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