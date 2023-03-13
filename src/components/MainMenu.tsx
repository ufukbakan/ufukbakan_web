import FloatCard from "./FloatCard";
import styles from "@/styles/Menu.module.css";

export default function () {
    return (
        <div className={styles.perspective}>
            <div className="v-stack w-full g-1">
                <div className="h-stack space-evenly">
                    <FloatCard bg="/developer.png" href="#about">About Me</FloatCard>
                    <FloatCard bg="/graduation.png" href="#education">Education</FloatCard>
                </div>
                <div className="h-stack space-evenly">
                    <FloatCard bg="/work.png" href="#experiences">Experiences</FloatCard>
                    <FloatCard bg="/project.png" href="#projects">Projects</FloatCard>
                </div>
            </div>
        </div>
    )
}