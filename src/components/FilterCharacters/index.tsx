import React, { useReducer } from "react";
import getColor from "../../services/getColor";

// Styles
import styles from "./FilterCharacters.module.css";

// Contexts
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getFilterCharacters } from "../../services/getPageData";
import { setFilter } from '../../redux/filter/filterActions';
import reducer, { initialState } from "./reducer";

type HoverType = "mafia" | "citizen" | "all" | "independent" | "mid-independent"

const FilterCharacters = () => {
    const [hover, dispatch] = useReducer(reducer, initialState);
    const subscribe = useDispatch()
    const { language } = useSelector((state: AppState) => state.languageState)
    const { filters } = getFilterCharacters(language);

    const clickHandler = (e: any) => {
        subscribe(setFilter(e.target.id))
    };

    const getSquad = (type: string): HoverType => {
        switch (type) {
            case "mafia":
            case "citizen":
            case "all":
            case "independent":
            case "mid-independent":
                return type
            default:
                return "all"
        }
    }

    const getStyles = (type: string) => {

        return {
            color: getColor(type),
            border: `1px solid ${getColor(type)}`,
            boxShadow: hover[getSquad(type)] ? `0 0 12px ${getColor(type)}` : "",
            padding: "1px 5px",
            width: "18%",
            height: "80px",
            transition: "all 0.2s",
        };
    };

    const squads_list: string[] = Object.keys(filters) // squad keys ["mafia", "citizen", ...]

    return (
        <div className={styles.container}>
            {squads_list.map((squad) => (
                <button
                    key={squad}
                    onClick={clickHandler}
                    id={squad}
                    style={getStyles(squad)}
                    onMouseOver={() => dispatch(squad)}
                >
                    {filters[getSquad(squad)]}
                </button>
            ))}
        </div>
    );
};

export default FilterCharacters;
