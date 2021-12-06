import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./SuggestButton.module.css"

type Props = {
    title: string,
    id: number
}

const SuggestButton: FC<Props> = ({ id, title }) => {
    const navigate = useNavigate()
    return (
        <div className={styles.container} onClick={() => navigate(`/suggested-scenarios/${id}`)}>
            <h3>{title}</h3>
        </div>
    );
};

export default SuggestButton;