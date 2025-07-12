import Map from "../../components/Map/Map.tsx";
import Header from "../../components/Header/Header.tsx";
import BackButton from "../../components/BackButton/BackButton.tsx";
import {useLocation} from "wouter";
import Button from "../../components/Button/Button.tsx";
import styles from "./StopMapPage.module.css";

export default function StopMapPage({params}: {params: Record<string, string>}) {

    console.log(params.lat, params.lon);

    const lat = parseFloat(params.lat);
    const lon = parseFloat(params.lon);

    const route :[number, number][] =[ [50.9856, 12.9810], [lat, lon]];

    const [location, navigate] = useLocation();

    return (
        <div className={styles.pageContent}>
            <BackButton onClickHandler={ ()=> navigate(`/add-stop/${params.hour}`)} />
            <Header label={`Taking you to ${params.name}`} size={"big"}/>
            <div className={styles.mapContainer}>
                <Map path={route}/>
            </div>
            <div className={styles.buttonContainer}>
                <Button label={"End route to this stop"} onClickHandler={ ()=> navigate(`/map/${params.hour}`) }/>
            </div>
        </div>
    )
}