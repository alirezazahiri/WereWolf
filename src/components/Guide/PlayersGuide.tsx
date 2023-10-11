import  { FC } from 'react';

// types 
import { PlayersObj } from '../../translations/Guide/types';

// components 
import GuideContainer from './GuideContainer';

const PlayersGuide: FC<PlayersObj> = ({title, description}) => {
    return (
        <GuideContainer>
            <h1>{title}</h1>
            <p>{description}</p>
        </GuideContainer>
    );
};

export default PlayersGuide;