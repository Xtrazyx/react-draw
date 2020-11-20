import * as React from 'react';
import {FunctionComponent} from "react";
import { CanvasContext } from '../contexts';

interface Props {
    x?: number,
    y?: number,
    size?: number,
    color?: string
}

export const Square: FunctionComponent<Props> = (props)  => {
    const { size = 0, x = 0, y = 0, color = '#000000' } = props;

    const ctx: CanvasRenderingContext2D = React.useContext(CanvasContext);

    React.useEffect(() => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    });

    return <></>;
};
