import * as React from 'react';
import { Scene } from "./scene";
import {Square} from "./square";

export default function App(){
    const [xPos, setXPos] = React.useState(10);

    function moveRight() {
        setXPos(xPos + 1);
    }

    return (
        <div>
            <button onClick={moveRight}>Move Right</button>
            <Scene height={500} width={500} style={{backgroundColor: '#41b1f7'}}>
              <Square x={xPos} y={10} size={30}/>
              <Square x={50} y={10} size={30}/>
            </Scene>
        </div>
    )
}
