import * as React from 'react';
import {FunctionComponent} from "react";
import { CanvasContext } from '../contexts';

interface Props {
    x?: number,
    y?: number,
    radius?: number,
    color?: string
}

export const Circle: FunctionComponent<Props> = (props)  => {
    const { radius = 0, x = 0, y = 0, color = '#000000' } = props;

    const ctx: CanvasRenderingContext2D = React.useContext(CanvasContext);

    React.useEffect(() => {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    });

    return <></>;
};
