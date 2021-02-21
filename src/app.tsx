import * as React from 'react';
import styled from 'styled-components';
import { Scene } from "./components/scene";
import { Maison } from './components/maison';
import {Circle} from "./components/circle";
import {Line} from "./components/line";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

interface Collider {
    height: number,
    width: number,
    x: number,
    y: number
}

interface Options {
    hueRotation?: number
}

interface State {
    [key: string]: Collider & Options
}

export default function App(){
    const hauteurScene = 800;
    const largeurScene = 800;

    const initialState: State = {
        m1: {
            x: 250,
            y: 450,
            height: 350,
            width: 350,
        },
        m2: {
            x: 80,
            y: 360,
            height: 105,
            width: 105,
        },
        m3: {
            x: 550,
            y: 200,
            height: 150,
            width: 150,
        }
    };

    const [state, setState] = React.useState(initialState);

    React.useEffect(() =>
        {
            console.log('state', state);
        }
    );

    function handleClick(event: React.MouseEvent) {
        const { clientX, clientY } = event;

        console.log({ clientX, clientY });

        Object.entries(state).forEach(([id, collider]) =>
            {
                if(detectCollision(collider, clientX, clientY)) {
                    console.log('collision with', id);
                    setState({
                        ...state,
                        [id]: {
                            ...collider,
                            hueRotation: (collider.hueRotation || 0) + 10,
                            width: collider.width + 50
                        }
                    })
                }
            }
        )
    }

    function detectCollision(collider: Collider, clientX: number, clientY: number) {
        return  isBetween(clientX, collider.x, collider.x + collider.width) &&
                isBetween(clientY, collider.y, collider.y + collider.height);
    }

    function isBetween(target: number, a: number, b: number): boolean {
        const min = Math.min(a, b);
        const max = Math.max(a, b);

        return target >= min && target <= max;
    }

    return (
        <Container>
            <Scene
                onClick={handleClick}
                height={hauteurScene}
                width={largeurScene}
                style={{backgroundColor: '#41b1f7'}}
                fullscreen={true}
            >
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

                {Object.entries(state).map(([key, collider]) =>
                    <Maison key={key} {...collider}/>
                )}
            </Scene>
        </Container>
    )
}
