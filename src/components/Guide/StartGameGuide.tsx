import  { FC } from 'react';
import GuideContainer from './GuideContainer';

type Props = {
    title: string;
    description: string;
}

const StartGameGuide: FC<Props> = ({ title, description }) => {
    return (
        <GuideContainer>
            <h1>{title}</h1>
            <p>{description}</p>
        </GuideContainer>
    );
};

export default StartGameGuide;