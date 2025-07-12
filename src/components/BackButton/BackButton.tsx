import styles from "./BackButton.module.css"

export default function BackButton({onClickHandler}: {onClickHandler: () => void}) {
    return (
        <button className={styles.BackButton} onClick={onClickHandler}>
            <img src={"/photos/back-arrow.svg"} alt="Back Button" />
            {/*<img src={"../../../photos/back-arrow.svg"} alt="Back Button" />*/}
        </button>
    )
}