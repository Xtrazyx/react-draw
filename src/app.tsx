import * as React from 'react';
import { Scene } from "./components/scene";
import { Square } from "./components/square";
import styled from 'styled-components';
import {Circle} from "./components/circle";
import { Line } from './components/line';

const Container = styled.div`
    position: relative
`;

export default function App(){
    return (
        <Container>
            <Scene height={800} width={800} style={{backgroundColor: '#41b1f7'}}>
                <Square size={300} y={500} x={250} color={'#e1e1e1e1'} />
                <Circle radius={35} x={400} y={580} color={'rgba(113,113,113,0.88)'}/>
            </Scene>
        </Container>
    )
}
