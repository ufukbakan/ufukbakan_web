import Lottie from "react-lottie";
import githubIcon from "./assets/icons8-github.json";
import twitterIcon from "./assets/icons8-twitter.json";
import linkedinIcon from "./assets/icons8-linkedin-2.json";
import gmailIcon from "./assets/icons8-gmail-logo.json";
import playIcon from "./assets/icons8-play-48.png";
import stopIcon from "./assets/icons8-stop-48.png";
import { useEffect, useState } from "react";
import classNames from "classnames";

interface ContactCardProps {
    bgState: Array<any>,
}

export default function (props: ContactCardProps) {

    const [animatedLogo, setAnimatedLogo] = useState(-1);
    const [staticBg, setStaticBg] = props.bgState;

    return (
        <>
            <div className="card">
                <span className="logo-links">
                    <span onMouseOver={() => setAnimatedLogo(0)} onMouseLeave={() => setAnimatedLogo(-1)}>
                        <a className="logo-link" href="https://github.com/ufukbakan" target="_blank">
                            <Lottie options={{
                                animationData: githubIcon,
                                loop: true,
                                autoplay: false,
                            }} isClickToPauseDisabled={true} isPaused={animatedLogo != 0}></Lottie>
                        </a>
                    </span>
                    <span onMouseOver={() => setAnimatedLogo(1)} onMouseLeave={() => setAnimatedLogo(-1)}>
                        <a className="logo-link" href="https://www.linkedin.com/in/ufuk-bakan/" target="_blank">
                            <Lottie options={{
                                animationData: linkedinIcon,
                                loop: true,
                                autoplay: false,
                            }} isClickToPauseDisabled={true} isPaused={animatedLogo != 1}></Lottie>
                        </a>
                    </span>
                    <span onMouseOver={() => setAnimatedLogo(2)} onMouseLeave={() => setAnimatedLogo(-1)}>
                        <a className="logo-link" href="https://twitter.com/ufukbakan18" target="_blank">
                            <Lottie options={{
                                animationData: twitterIcon,
                                loop: true,
                                autoplay: false,
                            }} isClickToPauseDisabled={true} isPaused={animatedLogo != 2}></Lottie>
                        </a>
                    </span>
                    <span onMouseOver={() => setAnimatedLogo(3)} onMouseLeave={() => setAnimatedLogo(-1)}>
                        <a className="logo-link" href="mailto:println.ufukbakan@gmail.com" target="_blank">
                            <Lottie options={{
                                animationData: gmailIcon,
                                loop: true,
                                autoplay: false,
                            }} isClickToPauseDisabled={true} isPaused={animatedLogo != 3}></Lottie>
                        </a>
                    </span>
                </span>
                <div className="name-title">
                    <div className="name">Ufuk Bakan</div>
                    <div className="title">Developer</div>
                </div>
                <div className="play-background-animation-button" onClick={() => setStaticBg(!staticBg)}>
                    <img src={staticBg ? playIcon : stopIcon}></img>
                </div>
            </div>
        </>
    )
}