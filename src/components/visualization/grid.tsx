import { Stage, Graphics } from "@pixi/react";
import PIXI from "pixi.js";
import React, { useCallback, useState } from "react";


type TableProps = {
    rows: number,
    cols: number,
    width: number,
    height: number
}

const Grid: React.FC<TableProps> = ({rows, cols, width, height}) => {
    return (
        <Stage width={width} height={height} options={{backgroundColor: "white"}}>
            <Tile x={0} y={0} size={50}/>
        </Stage>
    )
}

type TileProps = {
    x: number,
    y: number,
    size: number
}

const Tile: React.FC<TileProps> = ({x, y, size}) => {
    const [color, setColor] = useState("green")

    const draw = useCallback((g: PIXI.Graphics) => {
        g.clear()
        g.lineStyle(2, "gray")
        g.beginFill(color)
        g.drawRect(x, y, size, size)
    }, [color])

    const mouseover = useCallback((e: PIXI.FederatedPointerEvent) => {
        console.log("mouseover")
        setColor("red")
    }, [])

    const mouseout = useCallback((e: PIXI.FederatedPointerEvent) => {
        console.log("mouseout")
        setColor("green")
    }, [])

    return (
        <Graphics draw={draw} pointerdown={() => {
            console.log("click")
        }} interactive={true}/>
    )
}

export default Grid