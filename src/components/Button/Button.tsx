import styles from "./Button.module.css"

export default function Button ({label, onClickHandler} : {label: string, onClickHandler?: () => void}) {
    return <button className={styles.purpleButton} onClick={onClickHandler} >
        {label}
    </button>

}