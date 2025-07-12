import Camera from "../../components/Camera/Camera.tsx";

export function CameraPage({params}: {params: Record<string, string>}) {
    return (
        <div>
            <Camera hour={params.hour}/>
        </div>
    )
}