//sending data to backend on a page that doesn't have a map component because it crashes for some reason??
import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "../../components/Header/Header.tsx";
import styles from "./GoingBackPage.module.css";

export default function GoingBackPage({ params }: { params: Record<string, string> }) {
    const [, navigate] = useLocation();

    useEffect(() => {
        const storedLocation = sessionStorage.getItem("startLocation");

        if (!storedLocation) {
            console.warn("No startLocation found in sessionStorage.");
            navigate(`/map/${params.hour}`);
            return;
        }

        const [lat, lon] = JSON.parse(storedLocation);

        const postLocation = async () => {
            try {
                console.log("Posting to backend...", { lat, lon });

                await fetch("http://localhost:3001/location", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ latitude: lat, longitude: lon }),
                });

                console.log("Posted to backend successfully");
            } catch (error) {
                console.error("Failed to post location to backend:", error);
            } finally {
                navigate(`/map/${params.hour}`);
            }
        };

        postLocation();
    }, [navigate, params.hour]);

    return (
        <div className={styles.pageContent}>
            <Header label={"Loading..."} size={"small"} />
        </div>
    );
}

