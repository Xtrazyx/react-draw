import * as React from 'react';
import {FunctionComponent, useCallback} from "react";
import { CanvasContext } from '../contexts';

interface Props {
    height?: string,
    width?: string,
    fullscreen?: boolean
}

export const Scene: FunctionComponent<Props> = (props)  => {
    const { height, width, children, fullscreen } = props;

    const [context, setContext] = React.useState();

    const ref = useCallback(node => {
        if (node !== null) {
            setContext(node.getContext('2d'));
        }
    },[]);

    return (
        <CanvasContext.Provider value={context}>
            <canvas ref={ref} height={fullscreen ? '100vh' : height} width={fullscreen ? '100%' : width}>
            </canvas>
            {context && (
                <>{children}</>
            )}
        </CanvasContext.Provider>
    )
};
