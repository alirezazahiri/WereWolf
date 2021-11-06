import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import getChars from "../../services/getPageData"
import ScenarioCard from '../ScenarioCard';
import FilterContainer from '../FilterContainer';
import useSearch from '../../hooks/useSearch';

const Scenarios = () => {
    const { language, filter } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.filterState
    }))
    const [value, changeHandler] = useSearch()

    const { characters, names } = getChars(language)
    return (
        <div>
            <FilterContainer value={value} changeHandler={changeHandler} language={language} />
            {characters
                .filter((character) =>
                    filter === "all" ? true : character.type === filter
                )
                .filter((character) =>
                    character.title.toLowerCase().includes(value.trim().toLowerCase())
                )
                .map((character, index) => (
                    <ScenarioCard key={names[index]} character={character} />
                ))}
        </div>
    );
};

export default Scenarios;