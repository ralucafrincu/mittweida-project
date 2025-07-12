import Header from "../../components/Header/Header.tsx";
import styles from "./ProgressTrackerPage.module.css"
import {routes} from "../../routes.ts";
import Map from "../../components/Map/Map.tsx";

export default function ProgressTrackerPage({params}: {params: Record<string, string>}) {

    const gallery = JSON.parse(sessionStorage.getItem("photoGallery") || "[]");

    let route: [number, number][] = [];
    let placesNumber: number = 0;

    if(params.hour === '1') {
        route = routes.hours1;
        placesNumber = 2;
    } else if (params.hour === '2') {
        route = routes.hours2;
        placesNumber = 4;
    } else if(params.hour === '3') {
        route = routes.hours3;
        placesNumber = 6;
    } else if(params.hour === '4') {
        route = routes.hours4;
        placesNumber = 8;
    } else if(params.hour === '5') {
        route = routes.hours5;
        placesNumber = 9;
    } else if(params.hour === '6') {
        route = routes.hours6;
        placesNumber = 10;
    }


    return(
        <div>
            <div className={styles.progressTrackerContainer}>
                <Header label={"Your recap"} size={"big"}/>
                <Header label={`You visited ${placesNumber} places!\n` +
                    "Great job!"} size={"small"}/>
            </div>

            <div className={styles.mapContainer}>
                <Map markerPath={route}/>
            </div>

            <div className={styles.photoMissionContainer}>
                <Header label={"Photo mission"} size={"big"}/>

                {
                    gallery.map((pic: string, index: number) => {
                        return (
                            <div>
                                <img src={pic} key={index} alt="photo mission pic"/>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}