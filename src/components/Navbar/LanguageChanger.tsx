import { FC } from "react";

// react-redux 
import { useDispatch, useSelector } from "react-redux";

// redux 
import { changeLanguage } from '../../redux/language/languageActions';
import { AppState } from '../../redux/store';

// utils 
import { IR_FLAG, UK_FLAG } from "./utils";

type Props = {
    className: string
}

const LanguageChanger: FC<Props> = ({ className }) => {
    const dispatch = useDispatch()
    const { language } = useSelector((state: AppState) => state.languageState)
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