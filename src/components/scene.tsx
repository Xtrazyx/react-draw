import * as React from 'react';
import {CSSProperties, FunctionComponent, useCallback} from "react";
import { CanvasContext } from '../contexts';

interface Props {
    height?: number,
    width?: number,
    style?: CSSProperties
}

export const Scene: FunctionComponent<Props> = (props)  => {
    const { height, width, children, style } = props;

    const [context, setContext] = React.useState();

    const ref = useCallback(node => {
        if (node !== null) {
            setContext(node.getContext('2d'));
        }
    },[]);

    return (
        <CanvasContext.Provider value={context}>
            <canvas ref={ref} height={height} width={width} style={style}>
            </canvas>
            {context && (
                <>{children}</>
            )}
        </CanvasContext.Provider>
    )
};
