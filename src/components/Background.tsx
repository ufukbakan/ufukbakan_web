import { IntervalController, prcInterval, prcIntervalWithDelta, prcTimeout } from "precision-timeout-interval";
import { useEffect, useRef, useState } from "react";
import randomhex from "random-hex";

type Position = {
    x: number,
    y: number
}

interface Updatable {
    update(deltaT: number): void
}

class Trail implements Updatable {
    speed: number;
    position: Position;
    size: number;
    color: string;
    opacity = 1;
    maxLifetime: number;
    lived = 0;
    #direction: number;
    #rainbow: boolean;
    constructor(speed: number, position: Position, size?: number, direction?: number, maxlifetime?: number, rainbow?: boolean, color?: string) {
        this.position = position;
        this.speed = speed;
        this.size = size || 2;
        this.color = color || rainbow ? randomhex.generate() : "#e3ffffff";
        this.maxLifetime = maxlifetime || 3000;
        this.#direction = direction || -Math.PI / 2;
        this.#rainbow = rainbow || false;
    }

    update(deltaT: number): void {
        this.lived += deltaT;
        this.position.x += Math.cos(this.#direction) * this.speed * (deltaT / 100);
        this.position.y -= Math.sin(this.#direction) * this.speed * (deltaT / 100);
        this.opacity = Math.max(0, 1 - (this.lived / this.maxLifetime));
        if (this.#rainbow) {
            this.color = randomhex.generate();
        }
    }
}

class CanvasHandler {
    FPS = 60;
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    mousePosition: Position = { x: -10, y: -10 };
    // #blinkColors = ["#e3ffffff", "#ebffffaa", "#f5fcfc44", "#ffffff00"];
    // #activeBlinkColor = 0;
    #dimensions = { width: window.innerWidth, height: window.innerHeight };
    #timerUpdate: IntervalController | undefined;
    #timerDraw: IntervalController | undefined;
    #trails: Trail[] = [];

    #dimensionCallback = () => { this.#dimensions = { width: window.innerWidth, height: window.innerHeight } };
    #mouseMoveCallback = (e: MouseEvent) => {
        this.mousePosition = { x: e.clientX, y: e.clientY };
        this.#trails.push(new Trail(1, { ...this.mousePosition }, 2, -Math.PI / 2, 3000, true));
    };

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        window.addEventListener("resize", this.#dimensionCallback);
        // window.addEventListener("click", this.#clickCallback.bind(this));
        window.addEventListener("mousemove", this.#mouseMoveCallback);
        if (canvas) {
            this.#timerUpdate = prcIntervalWithDelta(50, this.update.bind(this));
            this.#timerDraw = prcInterval(1000 / this.FPS, this.draw.bind(this));
        }
    }

    #clickCallback(e: MouseEvent) {
        this.switchEffect();
        // for(let i = 0; i < Math.PI*2; i += Math.PI/16){
        //     this.#trails.push(new Trail(8, {x: e.clientX, y: e.clientY}, i, 2000, true));
        // }
    }

    update(deltaT: number) {
        const updatables: Updatable[] = [...this.#trails];
        updatables.forEach(e => e.update(deltaT));
        this.#trails = this.#trails.filter(trail => trail.maxLifetime > trail.lived);
    }
    draw() {
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = "#0a0a0a";
        this.ctx.fillRect(0, 0, this.#dimensions.width, this.#dimensions.height);
        // this.ctx.fillStyle = this.#blinkColors[this.#activeBlinkColor];
        // this.ctx.fillRect(this.mousePosition.x - 5, this.mousePosition.y - 5, 10, 10);
        // this.#activeBlinkColor = (this.#activeBlinkColor + 1) % this.#blinkColors.length;
        this.#trails.forEach(trail => {
            this.ctx.globalAlpha = trail.opacity;
            this.ctx.fillStyle = trail.color;
            this.ctx.fillRect(trail.position.x, trail.position.y, trail.size, trail.size);
        });
    }

    end() {
        window.removeEventListener("resize", this.#dimensionCallback);
        window.removeEventListener("mousemove", this.#mouseMoveCallback);
        if (this.#timerUpdate)
            this.#timerUpdate.cancel();
        if (this.#timerDraw)
            this.#timerDraw.cancel();
    }

    async switchEffect() {
        let point: Position = { x: 0, y: this.#dimensions.height };
        let rightUpper: Position = { x: this.#dimensions.width, y: 0 };
        const ydiff = (point.y - rightUpper.y);
        const xdiff = (rightUpper.x - point.x);
        let topRightDirection = Math.atan(ydiff / xdiff);
        let topLeftDirection = Math.atan(xdiff / ydiff);
        let moveStep = Math.sqrt(Math.pow((point.y - rightUpper.y), 2) + Math.pow((rightUpper.x - point.x), 2)) / 100;
        while (point.x < rightUpper.x || point.y > rightUpper.y) {
            const cos = Math.cos(topRightDirection);
            const sin = Math.sin(topRightDirection);
            // this.#trails.push(new Trail(0, { ...point }, Math.max(moveStep*cos, moveStep*sin), 0, undefined, true));

            let goTopLeft = { ...point };
            while (goTopLeft.x > 0 && goTopLeft.y > 0) {
                this.#trails.push(new Trail(0, { ...goTopLeft }, Math.max(moveStep * cos, moveStep * sin), 0, undefined, true));
                goTopLeft.x -= Math.cos(topLeftDirection) * moveStep;
                goTopLeft.y -= Math.sin(topLeftDirection) * moveStep;
            }

            let goBottomRight = { ...point }
            while (goBottomRight.x < this.#dimensions.width) {
                goBottomRight.x += Math.cos(topLeftDirection) * moveStep;
                goBottomRight.y += Math.sin(topLeftDirection) * moveStep;
                this.#trails.push(new Trail(0, { ...goBottomRight }, Math.max(moveStep * cos, moveStep * sin), 0, undefined, true));
            }

            point.x += moveStep * cos;
            point.y -= moveStep * sin;
            await new Promise(r => prcTimeout(0, r));
        }
    }

}

export default function () {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const canvasHandler = new CanvasHandler(canvasRef.current as HTMLCanvasElement);
        window.addEventListener("resize", () => setDimensions({ width: window.innerWidth, height: window.innerHeight }));
        return () => {
            canvasHandler.end();
        }
    }, [window, canvasRef.current]);


    return (
        <div id="background">
            <canvas width={dimensions.width} height={dimensions.height} id='background-canvas' ref={canvasRef}></canvas>
        </div>
    )
}