import Card from "../../components/Card/Card.tsx";
import ClickableText from "../../components/ClickableText/ClickableText.tsx";
import Header from "../../components/Header/Header.tsx";
import styles from "./AddStopPage.module.css"
import LocationButton from "../../components/LocationButton/LocationButton.tsx";
import BackButton from "../../components/BackButton/BackButton.tsx";
import {Link, useLocation} from "wouter";

export default function AddStopPage({params}: {params: Record<string, string>}) {

    const [, navigate] = useLocation();

    function handleBackClick() {
        navigate(`/map/${params.hour}`);
    }

    return (
        <div className={styles.addStopContent}>

            <BackButton onClickHandler={handleBackClick} />
            <Header label={"Stop for a break!"} size={"big"} />
            <Header label={"Choose a cafe or a restaurant"} size={"small"} />

            <Card>
                <Link to={`/routing/Cafe No.14/50.98712103324559/12.97074763961249/${params.hour}`}>
                    <div>
                        <ClickableText label={"Cafe No.14"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/Speilothek El Dorado/50.98636951846983/12.979213797133259/${params.hour}`}>
                    <div>
                        <ClickableText label={"Speilothek El Dorado"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/Landbäckerei Dietrich/50.993993762601924/12.97928365987692/${params.hour}`}>
                    <div>
                        <ClickableText label={"Landbäckerei Dietrich"}/>
                        <LocationButton/>
                    </div>
                </Link>

            </Card>

            <Card>
                <Link to={`/routing/Bistro Doson/50.98631733013405/12.978772808479043/${params.hour}`}>
                    <div>
                        <ClickableText label={"Bistro Doson"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/ASIA Pfanne/50.98474365265243/12.980017353373153/${params.hour}`}>
                    <div>
                        <ClickableText label={"ASIA Pfanne"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/Restaurant Athos/50.98687114385287/12.974095036290839/${params.hour}`}>
                    <div>
                        <ClickableText label={"Restaurant Athos"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/Mittweidaer Döner/50.98669870984778/12.981731241615627/${params.hour}`}>
                    <div>
                        <ClickableText label={"Mittweidaer Döner"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/Restaurant Skopelos/50.98596253865065/12.979714220580346/${params.hour}`}>
                    <div>
                        <ClickableText label={"Restaurant Skopelos"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/MIRO Pizza & Döner/50.99281741027764/12.971449823822796/${params.hour}`}>
                    <div>
                        <ClickableText label={"MIRO Pizza & Döner"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/Pizza Maria Express/50.98502467448677/12.964928210627294/${params.hour}`}>
                    <div>
                        <ClickableText label={"Pizza Maria Express"}/>
                        <LocationButton/>
                    </div>
                </Link>

                <Link to={`/routing/Cafeteria Party Buffet/50.9899883717907/12.957519412474733/${params.hour}`}>
                    <div>
                        <ClickableText label={"Cafeteria Party Buffet"}/>
                        <LocationButton/>
                    </div>
                </Link>
            </Card>

        </div>
    )
}