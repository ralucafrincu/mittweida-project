import Button from "../../components/Button/Button.tsx";
import styles from "./MapPage.module.css"
import {useLocation} from "wouter";
import Map from "../../components/Map/Map.tsx";
import {useState} from "react";
import {routes} from "../../routes.ts";

export default function MapPage({params}: {params: Record<string, string>}) {

    const [location, navigate] = useLocation();

    const [count, setCount] = useState(0);

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
            <div className={styles.mapContainer}>
                <Map path={route}/>
            </div>
            <div className={styles.buttonContainer}>
                <Button label={"Check in"} onClickHandler={ ()=> navigate(`/photo-mission/${params.hour}`) }/>
                <Button label={"Add a stop"} onClickHandler={ ()=> navigate(`/add-stop/${params.hour}`) }/>
            </div>
            <div className={styles.finishButton}>
                <Button
                    label={"Finish journey & see my progress"}
                        onClickHandler={ ()=> {
                            setCount(count + 1);
                            sessionStorage.setItem("count", JSON.stringify(count));
                            navigate(`/progress-tracker/${params.hour}`);
                }}/>
            </div>
        </div>
    )
}