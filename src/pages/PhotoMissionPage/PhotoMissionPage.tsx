import Header from "../../components/Header/Header.tsx";
import styles from "./PhotoMissionPage.module.css"
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton.tsx";
import {useLocation} from "wouter";

export default function PhotoMissionPage({params}: {params: Record<string, string>}) {

    const [location, navigate] = useLocation();

    function handleSkip() {
        navigate(`/map/${params.hour}`);
    }


    return(
        <div className={styles.photoMissionPageContent}>
            <Header label={"Congrats! You have discovered a new location!"} size={"big"} />
            <Header label={"Add it to your Photo Mission"} size={"small"} />
            <button className={styles.imagePurpleButton} onClick={()=>navigate(`/camera/${params.hour}`)}>
                <img src={"/photos/camera-icon.svg"} alt="camera-icon" />
            </button>
            <SecondaryButton label={"Skip"} onClickHandler={handleSkip}/>
        </div>
    )
}