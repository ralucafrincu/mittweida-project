import styles from "./LocationButton.module.css"

export default function LocationButton({onClickHandler}: {onClickHandler?: () => void}) {
    return (
        <button className={styles.locationButton} onClick={onClickHandler}>
            <img src={"/photos/location.svg"} alt="Location Button"/>
        </button>
    )
}