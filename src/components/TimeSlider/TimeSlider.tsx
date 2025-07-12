import CircularSlider from '@fseehawer/react-circular-slider';
import styles from "./TimeSlider.module.css";

export default function TimeSlider({onHoursChange}: {onHoursChange: (hours: number) => void}) {

    const timeLabels: string[] = Array.from(
        { length: 6 },
        (_, i) => `${i+1} hour${i+1 > 1 ? 's' : ''}`
    );

    return (
        <div className={styles.slider}>

            <CircularSlider
                label="duration"
                labelColor="#503047"
                labelFontSize="1.2rem"
                width={240}
                valueFontSize="2.1rem"
                data={timeLabels}
                knobColor="#904D7A"
                progressColorFrom="#503047"
                progressColorTo="#503047"
                trackColor="#947c80"
                knobSize={46}
                progressSize={13}
                direction={1}

                onChange={(value) => {
                    if(typeof value === "number") {
                        onHoursChange(value)
                    } else {
                        const newValue = value.slice(0, 1)
                        onHoursChange(Number(newValue))
                    }

                }}
            />
            {/*</CircularSlider>*/}

        </div>
    );
}