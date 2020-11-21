import * as React from 'react';
import { Scene } from "./scene";
import { Square } from "./square";
import styled from 'styled-components';
import {Circle} from "./circle";
import { Line } from './line';

const Container = styled.div`
    position: relative
`;

const Button = styled.button`
    position: absolute;
    bottom: 20px;
    left: 20px;
`;

export default function App(){
    const [xPos, setXPos] = React.useState(10);

    function moveRight() {
        setXPos(xPos + 5);
    }

    return (
        <Container>
            <Button onClick={moveRight}>Move Right</Button>
            <Scene height={500} width={500} style={{backgroundColor: '#41b1f7'}}>
              <Square x={xPos} y={10} size={30} color={'#9e8d39'}/>
              <Square x={50} y={10} size={30}/>
              <Square x={122} y={123} size={120} color={'#2222e6'}/>
              <Square x={200} y={200} size={100} color={'#a3e63b'}/>
              <Circle x={50+xPos} y={250} radius={75} color={'rgba(183,31,214,0.88)'}/>
              <Line x={55} y={265} toX={90} toY={295} color={'#a3e63b'} thickness={5}/>
            </Scene>
        </Container>
    )
}
