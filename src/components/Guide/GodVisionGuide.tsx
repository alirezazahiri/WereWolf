import  { FC } from 'react';
import { GodVisionObj } from '../../translations/Guide/types';
import GuideContainer from './GuideContainer';

const GodVisionGuide: FC<GodVisionObj> = ({title, description}) => {
    return (
        <GuideContainer>
            <h1>{title}</h1>
            <p>{description}</p>
        </GuideContainer>
    );
};

export default GodVisionGuide;