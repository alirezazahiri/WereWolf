import { useEffect, useState } from "react"

// Actions 
import { setFilter } from "../redux/filter/filterActions"

// react-redux 
import { useDispatch } from "react-redux"

const useSearch = (): [string, (e: any) => void] => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const changeHandler = (e: any): void => { setValue(e.target.value) }

    useEffect(() => {
        dispatch(setFilter("all"))
    }, [dispatch])

    return [value, changeHandler]
}

export default useSearch