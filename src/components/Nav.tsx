import HackyText from "./HackyText";
import styles from "@/styles/Nav.module.css"
import Head from "next/head";

export default function () {
    return (
        <>
            <nav className={styles.nav}>
                <h1><HackyText>ufuk bakan</HackyText></h1>
            </nav>
        </>
    )
}