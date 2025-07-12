import Map from "../../components/Map/Map.tsx";
import styles from "./SimpleMapPage.module.css";
import BackButton from "../../components/BackButton/BackButton.tsx";
import {useLocation} from "wouter";
import Header from "../../components/Header/Header.tsx";

export default function SimpleMapPage() {

    const [, navigate] = useLocation();

    return (
        <div className={styles.pageContent}>
            <BackButton onClickHandler={()=> navigate("/")}/>
            <Header label={"Explore Mittweida!"} size={"big"}/>
            <div className={styles.mapContainer}>
                <Map/>
            </div>
        </div>
    )
}