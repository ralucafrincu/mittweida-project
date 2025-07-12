import Webcam from "react-webcam";
import {useRef, useState} from "react";
import CameraButton from "../CameraButton/CameraButton.tsx";
import styles from "./Camera.module.css"
import {useLocation} from "wouter";

export default function Camera({hour}: {hour: string}) {

    const [location, navigate] = useLocation();

    const cameraRef = useRef<Webcam>(null);

    const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

    function takePic() {
        const capturedImage = cameraRef.current?.getScreenshot();

        if(capturedImage) {
            //setImage(capturedImage);
            //console.log(`this is capturedImage: ${capturedImage}`)

            sessionStorage.setItem("capturedImage", capturedImage);
            navigate(`/upload-photo/${hour}`)
        }
    }

    function switchCamera() {
        if (facingMode === "user") {
            setFacingMode("environment");
        } else {
            setFacingMode("user");
        }
    }

    return (
        <div>
            <Webcam mirrored={facingMode === "user"} ref={cameraRef} screenshotFormat={"image/jpeg"} videoConstraints={{ facingMode }}/>

            <div className={styles.purpleBox}>
                <div className={styles.centerButton}>
                    <CameraButton reverse={false} onClickHandler={takePic}/>
                </div>
                <div className={styles.rightButton}>
                    <CameraButton reverse={true} onClickHandler={switchCamera}/>
                </div>
            </div>
        </div>
    )

}