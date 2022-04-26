import React, { FC } from "react";

// vendor components
import Switch from "react-switch"

// styles 
import styles from "./StatSwitch.module.css"

type Props = {
    onChange: () => void,
    checked: boolean,
    title: string,
    color?: string
}

const StatSwitch: FC<Props> = ({ onChange, checked, color, title }) => {
    return (
        <div
            className={styles.statsContainer}
            style={{
                color,
                border: `1px solid ${color}`
            }}
        >

            <label>
                <Switch
                    onChange={onChange}
                    checked={checked}
                    offHandleColor="#800"
                    offColor="#DA0037"
                    onColor="#2ce071"
                />
            </label>
            <h1
                style={{ color: `${checked ? "#66DE93" : "#DA0037"}` }}
            >
                {title}
            </h1>
        </div>
    );
};

export default StatSwitch;
