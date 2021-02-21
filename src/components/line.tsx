import * as React from 'react';
import {FunctionComponent} from "react";
import { CanvasContext } from '../contexts';

interface Props {
    x?: number,
    y?: number,
    toX?: number,
    toY?: number,
    color?: string,
    thickness?: number
}

export const Line: FunctionComponent<Props> = (props)  => {
    const { x = 0, toX = 10, y = 0, toY = 10, thickness = 1, color = '#000000' } = props;

    const ctx: CanvasRenderingContext2D = React.useContext(CanvasContext);

    React.useEffect(() => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(toX, toY);
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.stroke();
    });

    return <></>;
};
