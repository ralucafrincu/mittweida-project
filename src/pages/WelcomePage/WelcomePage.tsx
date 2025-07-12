import styles from "./WelcomePage.module.css";
import Header from "../../components/Header/Header.tsx";
import Button from "../../components/Button/Button.tsx";
import ClickableText from "../../components/ClickableText/ClickableText.tsx";
import {useLocation} from "wouter";

export default function WelcomePage() {

    const [, navigate] = useLocation();

    function handleButtonClick() {
        navigate("/hours");
    }


    function handleTextClick() {
        navigate("/simple-map");
    }

    return (
        <div className={styles.welcomePageContent}>
            <div className={styles.heroContainer}>
                {/*<img src={"/photos/mittweida.jpg"} alt="picture of mittweida"/>*/}
                {/*<img src={"../../../photos/mittweida.jpg"} alt="picture of mittweida"/>*/}
                <img src={"mittweida-project/photos/mittweida.jpg"} alt="picture of mittweida"/>
                <div className={styles.gradient}></div>
            </div>
            <Header label={"Welcome to Mittweida!"} size={"big"}/>
            <p>Let’s take you on a journey! You can also join the Photo Mission by checking in when your reach a stop and taking pictures there!</p>
            <Button label={"Start exploring with a generated route"} onClickHandler={handleButtonClick}/>
            <span>OR</span>
            <div className= {styles.clickable} >
                <ClickableText label={"I want to explore by myself"} onClickHandler={handleTextClick}/>
            </div>
        </div>
    )
}