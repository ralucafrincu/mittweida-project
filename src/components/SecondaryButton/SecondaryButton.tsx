import styles from "./SecondaryButton.module.css"

export default function SecondaryButton ({label, onClickHandler} : {label: string, onClickHandler?: () => void}) {
    return <button className={styles.lightPurpleButton} onClick={onClickHandler} >
        {label}
    </button>

}