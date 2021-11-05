// react-redux 
import { FC } from "react";

// redux 
import { changeLanguage } from '../../redux/language/languageActions';
import { AppDispatch } from '../../redux/store';

// utils 
import { IR_FLAG, UK_FLAG } from "./utils";

type Props = {
    dispatch: AppDispatch
    language: string
    className: string
}

const LanguageChanger: FC<Props> = ({ dispatch, language, className }) => {
    return (
        <img
            className={className}
            onClick={() => dispatch(changeLanguage(language === "persian" ? "english" : "persian"))}
            title={language === "persian" ? "تغییر زبان" : "Change Language"}
            src={language === "persian" ? IR_FLAG : UK_FLAG}
            alt={language === "persian" ? "IR_FLAG" : "UK_FLAG"}
        />
    );
};

export default LanguageChanger;