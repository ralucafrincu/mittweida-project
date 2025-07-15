// import Header from "../../components/Header/Header.tsx";
// import styles from "./ProgressTrackerPage.module.css";
// import { routes } from "../../routes.ts";
// import Map from "../../components/Map/Map.tsx";
// import { useBackendLocation } from "../../useBackendLocation.ts";
//
// export default function ProgressTrackerPage({ params }: { params: Record<string, string> }) {
//     const gallery = JSON.parse(sessionStorage.getItem("photoGallery") || "[]");
//
//     let route: [number, number][] = [];
//     let placesNumber: number = 0;
//
//     if (params.hour === '1') {
//         route = routes.hours1;
//         placesNumber = 2;
//     } else if (params.hour === '2') {
//         route = routes.hours2;
//         placesNumber = 4;
//     } else if (params.hour === '3') {
//         route = routes.hours3;
//         placesNumber = 6;
//     } else if (params.hour === '4') {
//         route = routes.hours4;
//         placesNumber = 8;
//     } else if (params.hour === '5') {
//         route = routes.hours5;
//         placesNumber = 9;
//     } else if (params.hour === '6') {
//         route = routes.hours6;
//         placesNumber = 10;
//     }
//
//     const { location, isLoading, isError } = useBackendLocation();
//
//     if (isLoading) return <p>Loading your location from backend...</p>;
//     if (isError || !location) return <p>Could not load location from backend.</p>;
//
//     return (
//         <div>
//             <div className={styles.progressTrackerContainer}>
//                 <Header label={"Your recap"} size={"big"} />
//                 <Header label={`You visited ${placesNumber} places!\nGreat job!`} size={"small"} />
//             </div>
//
//             <div className={styles.mapContainer}>
//                 <Map markerPath={route} />
//             </div>
//
//             <div className={styles.breakContent}>
//                 <Header label={"Fun fact!"} size={"big"} />
//                 <Header
//                     label={`You decided to take a break at \nlatitude: ${location.latitude} \nlongitude: ${location.longitude}`}
//                     size={"small"}
//                 />
//             </div>
//
//             <div className={styles.photoMissionContainer}>
//                 <Header label={"Photo mission"} size={"big"} />
//
//                 {gallery.map((pic: string, index: number) => (
//                     <div key={index}>
//                         <img src={pic} alt="photo mission pic" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

import Header from "../../components/Header/Header.tsx";
import styles from "./ProgressTrackerPage.module.css";
import { routes } from "../../routes.ts";
import Map from "../../components/Map/Map.tsx";
import { useBackendLocation } from "../../useBackendLocation.ts";

export default function ProgressTrackerPage({ params }: { params: Record<string, string> }) {
    const gallery = JSON.parse(sessionStorage.getItem("photoGallery") || "[]");

    let route: [number, number][] = [];
    let placesNumber: number = 0;

        if (params.hour === '1') {
        route = routes.hours1;
        placesNumber = 2;
    } else if (params.hour === '2') {
        route = routes.hours2;
        placesNumber = 4;
    } else if (params.hour === '3') {
        route = routes.hours3;
        placesNumber = 6;
    } else if (params.hour === '4') {
        route = routes.hours4;
        placesNumber = 8;
    } else if (params.hour === '5') {
        route = routes.hours5;
        placesNumber = 9;
    } else if (params.hour === '6') {
        route = routes.hours6;
        placesNumber = 10;
    }

    const { location, isLoading, isError } = useBackendLocation();

    if (isLoading) return <p>Loading your location from backend...</p>;
    if (isError || !location || !location.latitude || !location.longitude) {
        return <p>Could not load location from backend.</p>;
    }

    const fetchedLocation: [number, number] = [location.latitude, location.longitude];

    return (
        <div>
            <div className={styles.progressTrackerContainer}>
                <Header label={"Your recap"} size={"big"} />
                <Header
                    label={`You visited ${placesNumber} places!\nGreat job!`}
                    size={"small"}
                />
            </div>

            <div className={styles.mapContainer}>
                <Map markerPath={route} singleMarker={fetchedLocation} />
            </div>

            <div className={styles.photoMissionContainer}>
                <Header label={"Photo mission"} size={"big"} />

                {gallery.map((pic: string, index: number) => (
                    <div key={index}>
                        <img src={pic} alt="photo mission pic" />
                    </div>
                ))}
            </div>

            <div className={styles.mapContainer}>
                <Header label="Here you decided to take a break :) " size="small" />
                <Map singleMarker={fetchedLocation} />
            </div>
        </div>
    );
}
