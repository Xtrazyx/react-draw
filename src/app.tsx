import * as React from 'react';
import { Scene } from "./components/scene";
import styled from 'styled-components';
import { Maison } from './components/maison';
import {Circle} from "./components/circle";
import {Line} from "./components/line";

const Container = styled.div`
    position: relative
`;

export default function App(){
    const hauteurScene = 800;
    const largeurScene = 800;

    return (
        <Container>
            <Scene height={hauteurScene} width={largeurScene} style={{backgroundColor: '#41b1f7'}}>
                <Circle
                    radius={80}
                    x={200}
                    y={200}
                    color={'rgba(255,231,44)'}
                />
                <Line x={200} y={40} toX={200} toY={360} thickness={10} color={'rgba(255,231,44)'}/>
                <Line x={40} y={200} toX={360} toY={200} thickness={10} color={'rgba(255,231,44)'}/>
                <Line x={80} y={80} toX={320} toY={320} thickness={10} color={'rgba(255,231,44)'}/>
                <Line x={320} y={80} toX={80} toY={320} thickness={10} color={'rgba(255,231,44)'}/>
                <Maison x={250} y={450} width={350}/>
                <Maison x={80} y={360} width={105}/>
                <Maison x={550} y={200} width={150}/>
            </Scene>
        </Container>
    )
}
