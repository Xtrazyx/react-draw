import * as React from 'react';
import { Scene } from "./scene";
import {Square} from "./square";

export default function App(){
  return (
    <div>
      <Scene fullscreen={true}>
          <Square x={10} y={10} size={30}/>
          <Square x={50} y={10} size={30}/>
      </Scene>
    </div>)
}
