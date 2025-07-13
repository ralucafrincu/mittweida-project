import Header from "../../components/Header/Header.tsx";
import Button from "../../components/Button/Button.tsx";
import styles from "./AddedPhotoPage.module.css"
import {useLocation} from "wouter";

export default function AddedPhotoPage({params}: {params: Record<string, string>}) {

    const [, navigate] = useLocation();

    const image = sessionStorage.getItem("capturedImage");

    return(
        <div className={styles.addedPhotoPageContent}>
            <Header label={"Your photo was added to the Photo Mission!"} size={"big"}/>

            {image && <img src={image} style={{height:'25%', width:'65%', borderRadius:'1.7rem'}} alt={"your picture"}/>}

            <Button label={"Back to map"} onClickHandler={()=>navigate(`/map/${params.hour}`)}/>
        </div>
    )
}