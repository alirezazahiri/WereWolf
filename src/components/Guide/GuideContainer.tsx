import React, {FC} from "react"

// styles 
import styles from "./GuideContainer.module.css"

type Props = {
    children: any
}

const GuideContainer: FC<Props> = ({children}) => {
    return <div className={styles.container}>{children}</div>
}

export default GuideContainer