import styles from "./CameraButton.module.css"

export default function CameraButton({reverse, onClickHandler}: {reverse: boolean, onClickHandler?: () => void}) {

    if(reverse) {
        return (
            <button className={styles.cameraButton} onClick={onClickHandler}>
                <img src={"/photos/camera-rotate.svg"} alt="Camera Button"/>
            </button>
        )
    }

    return (
        <button className={styles.cameraButton} onClick={onClickHandler}>
            <img src={"/photos/camera.svg"} alt="Camera Button"/>
        </button>
    )

}