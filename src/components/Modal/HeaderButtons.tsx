import React, { FC } from 'react';
import styles from "./HeaderButtons.module.css"

type Props = {
    type: string,
    buttons: {
        close: string,
        back_to_name_enter: string,
        start: string,
        go_to_char_select: string,
    },
    closeHandler: (() => void) | undefined,
    backHandler: (() => void) | undefined,
    gotoCharSelect: (() => void) | undefined,
}

const HeaderButtons: FC<Props> = ({ type, buttons, closeHandler, backHandler, gotoCharSelect }) => {
    return (
        <>
            {type === "nameEnter" &&
                <button className={styles.goto} onClick={gotoCharSelect}>
                    {buttons.go_to_char_select}
                </button>
            }
            {type === "charSelect" &&
                <>
                    <button className={styles.back} onClick={backHandler}>
                        {buttons.back_to_name_enter}
                    </button>
                    <button className={styles.start}>
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