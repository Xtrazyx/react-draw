import * as React from 'react';
import { Scene } from "./scene";
import {Square} from "./square";
import styled from 'styled-components';

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
        setXPos(xPos + 1);
    }

    return (
        <Container>
            <Button onClick={moveRight}>Move Right</Button>
            <Scene height={500} width={500} style={{backgroundColor: '#41b1f7'}}>
              <Square x={xPos} y={10} size={30} color={'#9e8d39'}/>
              <Square x={50} y={10} size={30}/>
            </Scene>
        </Container>
    )
}
