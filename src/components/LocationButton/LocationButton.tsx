import styles from "./LocationButton.module.css"

export default function LocationButton({onClickHandler}: {onClickHandler?: () => void}) {
    return (
        <button className={styles.locationButton} onClick={onClickHandler}>
            {/*<img src={"/public/photos/location.svg"} alt="Location Button"/>*/}
            <img src={`${import.meta.env.BASE_URL}photos/location.svg`} alt="Location Button"/>
        </button>
    )
}