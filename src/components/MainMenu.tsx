import FloatCard from "./FloatCard";
import styles from "@/styles/Menu.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function () {
    const router = useRouter();
    const [hash, setHash] = useState<string>(global.location ? global.location.hash : "");

    useEffect(() => {
        if (global.window) {
            var onHashChange = (e: HashChangeEvent) => { setHash(e.newURL.slice(e.newURL.lastIndexOf("#"))) };
            window.addEventListener("hashchange", onHashChange);
        }

        return (() => {
            if (global.window) {
                window.removeEventListener("hashchange", onHashChange);
            }
        });
    }, [global.window]);

    return (
        <div className={styles["card-container"]}>
            <div className="v-stack w-full g-1">
                <div className="h-stack space-evenly">
                    <FloatCard active={hash === "#about"} bg="/developer.png" href="#about">Me<br />&<br />My Tech Stack</FloatCard>
                    <FloatCard active={hash === "#education"} bg="/graduation.png" href="#education">Education</FloatCard>
                </div>
                <div className="h-stack space-evenly">
                    <FloatCard active={hash === "#experiences"} bg="/work.png" href="#experiences">Experiences</FloatCard>
                    <FloatCard active={hash === "#projects"} bg="/project.png" href="#projects">Projects</FloatCard>
                </div>
            </div>
        </div>
    )
}