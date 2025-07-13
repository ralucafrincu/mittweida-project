import Header from "../../components/Header/Header.tsx";
import Button from "../../components/Button/Button.tsx";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton.tsx";
import styles from "./UploadPhotoPage.module.css"
import {useLocation} from "wouter";

export default function UploadPhotoPage({params}: {params: Record<string, string>}) {

    const [, navigate] = useLocation();

    const image = sessionStorage.getItem("capturedImage");

    return (
        <div className={styles.uploadPhotoPageContent}>
            <Header label={"Here's your photo"} size={"big"}/>


            {image && <img src={image} style={{height:'25%', width:'65%', borderRadius:'1.7rem'}} alt={"you picture"}/> }

            <div className={styles.buttonContainer}>

                <Button
                    label={"Upload photo"}
                    onClickHandler={() => {
                        if (image) {
                            const gallery = JSON.parse(sessionStorage.getItem("photoGallery") || "[]");
                            gallery.push(image);
                            sessionStorage.setItem("photoGallery", JSON.stringify(gallery));
                        }
                        navigate(`/added/${params.hour}`);
                    }}
                />

                <SecondaryButton
                    label={"Retake photo"}
                    onClickHandler={() => {
                        sessionStorage.removeItem("capturedImage");
                        navigate(`/camera/${params.hour}`);
                    }}
                />

            </div>
        </div>
    )
}