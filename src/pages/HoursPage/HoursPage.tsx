import Header from "../../components/Header/Header.tsx";
import BackButton from "../../components/BackButton/BackButton.tsx";
import {useLocation} from "wouter";
import styles from "./HoursPage.module.css";
import Button from "../../components/Button/Button.tsx";
import TimeSlider from "../../components/TimeSlider/TimeSlider.tsx";
import {useState} from "react";

export default function HoursPage() {

    const [chosenHours, setChosenHours] = useState<number>();

    const [, navigate] = useLocation();

    function handleBackButtonClick() {
        navigate("/");
    }
    function handleButtonClick() {
        navigate(`/generated-route/${chosenHours}`);
    }

    console.log(chosenHours)
    return (
        <>
            <BackButton onClickHandler={handleBackButtonClick}/>
            <div className={styles.hoursPageContent}>
                <Header label={"Let's generate your route!"} size={"big"}/>
                <Header label={"Choose the length of your journey"} size={"small"}/>

                <TimeSlider onHoursChange={setChosenHours}/>

                <p>drag your finger to add time</p>
                <Button label={"Done"} onClickHandler={handleButtonClick}/>
            </div>
        </>
    )
}