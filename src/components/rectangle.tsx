import * as React from 'react';
import {FunctionComponent} from "react";
import { CanvasContext } from '../contexts';

interface Props {
    x?: number,
    y?: number,
    xLength?: number,
    yLength?: number,
    color?: string
}

export const Rectangle: FunctionComponent<Props> = (props)  => {
    const { x = 0, y = 0, xLength = 10, yLength = 10, color = '#000000' } = props;

    const ctx: CanvasRenderingContext2D = React.useContext(CanvasContext);

    React.useEffect(() => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, xLength, yLength);
    });

    return <></>;
};
