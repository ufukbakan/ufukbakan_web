import classNames from "classnames";
import { MouseEventHandler, useContext } from "react";
import { BookContext } from "./App";

export default function Book(props: BookProps) {

    const bookContext = useContext(BookContext);
    const bookIdClass = "book-"+(props.id+1);

    return (
        <div className={
            classNames("book " + bookIdClass, {
                "active": props.active, "prevent-click": props.preventClick,
            })
        }
            onClick={props.active ? undefined : props.onClick}
            style={
                {
                    left: (props.id * 11) - 10 + "vw",
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
                <div className="book-close-button" onClick={(e) => {
                    bookContext?.setActiveBook(-1);
                }}>&times;</div>
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