import classNames from "classnames";
import { MouseEventHandler } from "react";

export default function Book(props: BookProps) {

    return (
        <div className={
            classNames("book", { "active": props.active, "prevent-click": props.preventClick })
            }
            onClick={props.onClick}
            style={
                {
                    left: (props.id * 12) - 10 + "em",
                    animationDelay: props.id * -2.5 + "s"
                }
            }
        >
            <div className="face face-back"></div>
            <div className="face face-left">
                <span className="tag">
                    {props.tag}
                </span>
            </div>
            <div className="face face-right"></div>
            <div className="face face-top"></div>
            <div className="face face-bottom"></div>
            <div className="face face-front">
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

interface BookProps {
    id: number,
    active: boolean,
    preventClick: boolean
    tag: string,
    onClick: MouseEventHandler,
    children?: any,
}