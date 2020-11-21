import * as React from 'react';
import { Scene } from "./components/scene";
import { Square } from "./components/square";
import styled from 'styled-components';
import {Circle} from "./components/circle";
import { Line } from './components/line';
import {Rectangle} from "./components/rectangle";
import {Polygon} from "./components/polygon";

const Container = styled.div`
    position: relative
`;

const hauteurScene = 800;
const largeurScene = 800;

const distanceFenetre = 55;
const rayonFenetre = 25;

const hauteurToit = 125;

const largeurMaison = 350;
const positionMaison = { x: 150, y: hauteurScene - largeurMaison };

const hauteurPorte = 100;
const largeurPorte = 55;
const positionPorte = { x: positionMaison.x + largeurMaison / 2 - largeurPorte / 2, y: hauteurScene - hauteurPorte };

export default function App(){
    return (
        <Container>
            <Scene height={hauteurScene} width={largeurScene} style={{backgroundColor: '#41b1f7'}}>
                <Square
                    size={largeurMaison}
                    y={positionMaison.y}
                    x={positionMaison.x}
                    color={'#e1e1e1e1'}
                />
                <Rectangle
                    x={positionPorte.x}
                    y={positionPorte.y}
                    xLength={largeurPorte}
                    yLength={hauteurPorte}
                    color={'rgba(108,44,9,0.88)'}
                />
                <Polygon coordinates={[
                        positionMaison,
                        { x: positionMaison.x + largeurMaison, y: positionMaison.y },
                        { x: positionMaison.x + largeurMaison / 2, y: hauteurScene - largeurMaison - hauteurToit }
                    ]}
                />
                <Circle
                    radius={rayonFenetre}
                    x={ positionMaison.x + largeurMaison / 2}
                    y={hauteurScene - largeurMaison + distanceFenetre }
                    color={'rgba(113,113,113,0.88)'}
                />
            </Scene>
        </Container>
    )
}
