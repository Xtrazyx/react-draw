# Welcome to the React Draw

Draw in canvas with React component

## Features

### Scene wrapper
    `<Scene
         onClick={handleClick}
         height={500}
         width={500}
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
    </Scene>
`

### Primitives
* line
* circle
* polygon
* rectangle
* square

### Complex
* house

