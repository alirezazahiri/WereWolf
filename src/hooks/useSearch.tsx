import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setFilter } from "../redux/filter/filterActions"

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