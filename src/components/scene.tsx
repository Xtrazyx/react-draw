import * as React from 'react';
import { FunctionComponent } from "react";

interface Props {
    height: string,
    width: string
}

export const Scene: FunctionComponent<Props> = (props)  => {
    const { height, width } = props;

    return (
      <canvas height={height} width={width}>
      </canvas>
    )
};
