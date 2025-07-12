import styles from "./CameraButton.module.css"

export default function CameraButton({reverse, onClickHandler}: {reverse: boolean, onClickHandler?: () => void}) {

    if(reverse) {
        return (
            <button className={styles.cameraButton} onClick={onClickHandler}>
                {/*<img src={"/public/photos/camera-rotate.svg"} alt="Reverse Camera Button"/>*/}
                <img src={`${import.meta.env.BASE_URL}photos/camera-rotate.svg`} alt="Reverse Camera Button"/>
            </button>
        )
    }

    return (
        <button className={styles.cameraButton} onClick={onClickHandler}>
            <img src={`${import.meta.env.BASE_URL}photos/camera.svg`} alt="Camera Button"/>
        </button>
    )

}