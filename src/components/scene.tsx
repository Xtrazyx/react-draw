import * as React from 'react';
import {CSSProperties, FunctionComponent, useCallback} from "react";
import { CanvasContext } from '../contexts';

interface Props {
    height?: number,
    width?: number,
    style?: CSSProperties,
    fullscreen?: boolean
}

export const Scene: FunctionComponent<Props> = (props)  => {
    const { height, width, children, fullscreen, style } = props;

    const [context, setContext] = React.useState();

    const [fullScreenSize, setFullScreenSize] = React.useState({ height: undefined, width: undefined });

    const ref = useCallback(node => {
        if (node !== null) {
            setContext(node.getContext('2d'));
            if(fullscreen) {
                setFullScreenSize({ width: document.body.clientWidth, height: document.body.clientHeight})            }
        }
    },[]);

    return (
        <CanvasContext.Provider value={context}>
            <canvas
                ref={ref}
                height={fullScreenSize?.height || height}
                width={fullScreenSize?.width || width}
                style={style}
            >
            </canvas>
            {context && (
                <>{children}</>
            )}
        </CanvasContext.Provider>
    )
};
