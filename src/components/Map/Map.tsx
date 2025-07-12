import {MapContainer, Marker, TileLayer} from "react-leaflet";
import styles from "./Map.module.css";
import RoutingControl from "./RoutingControl.tsx";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map({path, markerPath} : {path?: [number, number][], markerPath?: [number, number][]}) {

    //fixing markers not getting rendered on phone
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
        iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
        shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
    })

    const position :[number, number] = [50.9856, 12.9810];

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} className={styles.map}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markerPath && markerPath.map((position, index) => (
                <Marker key={index} position={position}>

                </Marker>
            ))}

            { path && <RoutingControl waypoints={path} /> }
        </MapContainer>
    )
}