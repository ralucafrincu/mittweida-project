import styles from "./ClickableText.module.css";

export default function ClickableText({label, onClickHandler} : {label: string, onClickHandler?: () => void}) {

    return (
        <button className={styles.clickable} onClick={onClickHandler}>
            {label}
        </button>
    )
}