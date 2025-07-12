import Header from "../../components/Header/Header.tsx";
import BackButton from "../../components/BackButton/BackButton.tsx";
import {useLocation} from "wouter";
import Button from "../../components/Button/Button.tsx";
import styles from "./GeneratedRoutePage.module.css";
import Map from "../../components/Map/Map.tsx";
import {routes} from "../../routes.ts";

export default function GeneratedRoutePage({params}: {params: Record<string, string>}) {

    const [location, navigate] = useLocation();

    function handleBackClick() {
        navigate("/hours");
    }

    function handleStartClick() {
        //navigate("/map");
        navigate(`/map/${params.hour}`);
    }

    let route: [number, number][] = [];

    if(params.hour === '1') {
        route = routes.hours1;
    } else if (params.hour === '2') {
        route = routes.hours2;
    } else if(params.hour === '3') {
        route = routes.hours3;
    } else if(params.hour === '4') {
        route = routes.hours4;
    } else if(params.hour === '5') {
        route = routes.hours5;
    } else if(params.hour === '6') {
        route = routes.hours6;
    }


    return (
        <div>
            <BackButton onClickHandler={handleBackClick}/>
            <div className={styles.generatedRouteContent}>
                <Header label={"Here is your generated route"} size={"big"}/>
                <div className={styles.mapContainer}>
                    <Map path={route}/>
                </div>
                <Button label={"Start my journey"} onClickHandler={handleStartClick}/>
            </div>
        </div>
    )
}