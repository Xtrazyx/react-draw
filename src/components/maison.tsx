import * as React from 'react';
import {FunctionComponent} from "react";
import {Square} from "./square";
import {Rectangle} from "./rectangle";
import {Polygon} from "./polygon";
import {Circle} from "./circle";

interface Props {
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    hueRotation?: number
}

export const Maison: FunctionComponent<Props> = (props)  => {
    const { x = 0, y = 0, width = 350, hueRotation = 0 } = props;

    const [wallColor, setWallColor] = React.useState({
        r: 224,
        g: 224,
        b: 224
    });

    const windowRange = width / 5.5;
    const windowRadius = windowRange / 2;

    const hauteurToit = width / 2;
    const positionMaison = { x: x, y: y };

    const hauteurPorte = width / 3;
    const largeurPorte = hauteurPorte / 2;
    const positionPorte = {
        x: positionMaison.x + width / 2 - largeurPorte / 2,
        y: positionMaison.y + width - hauteurPorte };

    function circle(value) {
        if(value > 255) {
            return value % 255
        }

        return value
    }

    React.useEffect(() => {
        setWallColor(
            {
                r: circle(wallColor.r + hueRotation * Math.random() * 2),
                g: circle(wallColor.g + hueRotation * Math.random() * 1.2),
                b: circle(wallColor.b + hueRotation * Math.random() * 3.1)
            })
        },[hueRotation]);

    return <>
        <Square
            size={width}
            y={positionMaison.y}
            x={positionMaison.x}
            color={`rgb(
                ${wallColor.r},
                ${wallColor.g},
                ${wallColor.b}
            )`}
        />
        <Rectangle
            x={positionPorte.x}
            y={positionPorte.y}
            xLength={largeurPorte}
            yLength={hauteurPorte}
            color={'rgb(108,44,9)'}
        />
        <Polygon coordinates={[
            positionMaison,
            { x: positionMaison.x + width, y: positionMaison.y },
            { x: positionMaison.x + width / 2, y: y - hauteurToit }
        ]}
        />
        <Circle
            radius={windowRadius}
            x={positionMaison.x + width / 2}
            y={positionMaison.y + windowRange }
            color={'rgb(113,113,113)'}
        />
    </>;
};
