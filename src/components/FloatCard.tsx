import styles from "@/styles/Menu.module.css";
import { CSSProperties } from "react";

type FloatCardProps = {
    children?: string,
    href?: string,
    bg: string
}
export default function (props: FloatCardProps) {
    return (
        <a href={props.href} className={styles["float-card-link"]}>
            <div className={styles["float-card"]} style={{
                "--bg-image": `url('${props.bg}')`
            } as CSSProperties} >
                {props.children}
            </div>
        </a>
    )
}