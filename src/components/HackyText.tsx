import { CSSProperties, useEffect, useState } from "react";
import styles from "@/styles/HackyText.module.css";
import { prcInterval } from "precision-timeout-interval";

type HackyTextProps = {
    children: string;
}

export default function (props: HackyTextProps) {
    const range = [97, 122];
    const originalText = <span className={styles.glitch}>{props.children}</span>;
    const randomChar = () => String.fromCharCode(Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]);
    const [text, setText] = useState(originalText);

    useEffect(() => {
        let i = 0;
        const interval = prcInterval(60, () => {
            const randomText = props.children
                .split('')
                .map((ch, indx) => {
                    const delay1 = Math.random() * -3;
                    const delay2 = delay1 - 1.5;
                    const style = {
                        "--delay": `${delay1.toFixed(5)}s`,
                        "--delay2": `${delay2.toFixed(5)}s`
                    } as CSSProperties;
                    const char = i >= indx ? ch : randomChar();
                    return <span style={style} data-char={char} className={styles.glitch} key={indx}>{char}</span>
                });
            setText(<>
                {randomText}
            </>);

            i += 1 / 4;
            if (i >= props.children.length) {
                interval.cancel();
            }
        });

        return () => {
            // clearInterval(interval);
            interval.cancel();
        }
    }, [])

    return text
}