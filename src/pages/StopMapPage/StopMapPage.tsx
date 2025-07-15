// import Map from "../../components/Map/Map.tsx";
// import Header from "../../components/Header/Header.tsx";
// import BackButton from "../../components/BackButton/BackButton.tsx";
// import { useLocation } from "wouter";
// import Button from "../../components/Button/Button.tsx";
// import styles from "./StopMapPage.module.css";
// import { useUserLocation } from "../../useUserLocation.ts";
// // import { useBackendLocation } from "../../useBackendLocation.ts"
//
//
// export default function StopMapPage({ params }: { params: Record<string, string> }) {
//     const lat = parseFloat(params.lat);
//     const lon = parseFloat(params.lon);
//     const [, navigate] = useLocation();
//
//     const { userLocation, isLoading, isError } = useUserLocation();
//
//     const mockLocation: [number, number] = [50.9856, 12.9810];
//     const startLocation: [number, number] = userLocation ?? mockLocation;
//
//     const route: [number, number][] = [startLocation, [lat, lon]];
//
//     if (isLoading) return <p>Loading your location...</p>;
//     if (isError) return <p>Could not get your location. Showing default route.</p>;
//
//     return (
//         <div className={styles.pageContent}>
//             <BackButton onClickHandler={() => navigate(`/add-stop/${params.hour}`)} />
//             <Header label={`Taking you to ${params.name}`} size="big" />
//             <div className={styles.mapContainer}>
//                 <Map path={route} />
//             </div>
//             <div className={styles.buttonContainer}>
//                 <Button label="End route to this stop" onClickHandler={() => navigate(`/map/${params.hour}`)} />
//             </div>
//         </div>
//     );
// }


import { useEffect } from "react";
import Map from "../../components/Map/Map.tsx";
import Header from "../../components/Header/Header.tsx";
import BackButton from "../../components/BackButton/BackButton.tsx";
import { useLocation } from "wouter";
import Button from "../../components/Button/Button.tsx";
import styles from "./StopMapPage.module.css";
import { useUserLocation } from "../../useUserLocation.ts";
// import { useBackendLocation } from "../../useBackendLocation.ts"

export default function StopMapPage({ params }: { params: Record<string, string> }) {
    const lat = parseFloat(params.lat);
    const lon = parseFloat(params.lon);
    const [, navigate] = useLocation();

    //const { userLocation, isLoading, isError } = useUserLocation();
    const { userLocation } = useUserLocation();

    const mockLocation: [number, number] = [50.9856, 12.9810];
    const startLocation: [number, number] = userLocation ?? mockLocation;

    const route: [number, number][] = [startLocation, [lat, lon]];

    // ✅ Store start location in sessionStorage for later use
    useEffect(() => {
        if (userLocation) {
            sessionStorage.setItem("startLocation", JSON.stringify(userLocation));
        }
    }, [userLocation]);

    //if (isLoading) return <p>Loading your location...</p>;
    //if (isError) return <p>Could not get your location. Showing default route.</p>;

    return (
        <div className={styles.pageContent}>
            <BackButton onClickHandler={() => navigate(`/add-stop/${params.hour}`)} />
            <Header label={`Taking you to ${params.name}`} size="big" />
            <div className={styles.mapContainer}>
                <Map path={route} />
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    label="End route to this stop"
                    //onClickHandler={() => navigate(`/map/${params.hour}`)}
                    onClickHandler={() => navigate(`/going-back/${params.hour}`)}
                />
            </div>
        </div>
    );
}
