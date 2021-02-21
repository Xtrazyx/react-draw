import * as React from 'react';
import {FunctionComponent} from "react";
import { CanvasContext } from '../contexts';

interface Props {
    coordinates: { x: number, y: number }[],
    color?: string
}

export const Polygon: FunctionComponent<Props> = (props)  => {
    const { coordinates, color = '#000000' } = props;

    const ctx: CanvasRenderingContext2D = React.useContext(CanvasContext);

    React.useEffect(() => {
        ctx.beginPath();
        ctx.fillStyle = color;
        coordinates.forEach((item, index, array) => {
            if (index === 0) {
                ctx.moveTo(item.x, item.y);
                return;
            }

            if (array.length - 1 === index) {
                ctx.lineTo(item.x,item.y);
                ctx.closePath();
                return;
            }
            ctx.lineTo(item.x, item.y);
        });
        ctx.fill();
    });

    return <></>;
};
