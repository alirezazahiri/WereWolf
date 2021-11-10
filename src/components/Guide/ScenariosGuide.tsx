import React, { FC } from 'react';
import GuideContainer from './GuideContainer';
import { ScenariosObj } from '../../translations/Guide/types';

const ScenariosGuide: FC<ScenariosObj> = ({ title, description }) => {
    return (
        <GuideContainer>
            <h1>{title}</h1>
            <p>{description}</p>
        </GuideContainer>
    );
};

export default ScenariosGuide;