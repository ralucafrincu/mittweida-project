import styles from "./Header.module.css";

export default function Header({label, size}: {label: string, size: "big" | "small"}) {
    if (size === "big") {
        return (
            <h1 className={styles.bigHeader}>{label}</h1>
        )
    } else {
        return (
            <h2 className={styles.smallHeader}>{label}</h2>
        )
    }
}