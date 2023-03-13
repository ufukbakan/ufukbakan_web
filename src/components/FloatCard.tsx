import styles from "@/styles/Menu.module.css";
import { CSSProperties, ReactNode, useEffect, useState } from "react";

type FloatCardProps = {
    children?: ReactNode,
    href?: string,
    bg: string,
    active?: boolean
}
export default function (props: FloatCardProps) {
    const [styleList, setStyleList] = useState([
        styles["float-card-link"]
    ]);

    useEffect(() => {
        if (props.active) {
            setStyleList([
                styles["float-card-link"],
                styles["active-card"]
            ]);
        }else{
            setStyleList([
                styles["float-card-link"]
            ]);
        }
    }, [props.active]);

    return (
        <a href={props.href} className={styleList.join(" ")}>
            <div className={styles["float-card"]} style={{
                "--bg-image": `url('${props.bg}')`
            } as CSSProperties} >
                {props.children}
            </div>
        </a>
    )
}