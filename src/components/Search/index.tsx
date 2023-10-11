import  { FC } from 'react';

// styles 
import styles from "./Search.module.css"

type Props = {
    value: string,
    changeHandler: (e: any) => void,
    language: string
}

const Search: FC<Props> = ({ value, changeHandler, language }) => {
    return <input
        className={styles.searchInput}
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder={language === "persian" ? "...جستجو کن" : "Search..."}
    />

};

export default Search;