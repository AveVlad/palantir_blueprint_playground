import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactD3 from 'react-d3-components';

console.log('ReactD3', ReactD3);
// import d3basic from 'react-d3-basic';

// console.log('d3basic', d3basic);


const data = [{
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
}];


function Example() {
    return (
        <ReactD3.BarChart
            data={data}
            width={400}
            height={400}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}
        />
    )
}


const container = document.getElementById('app-container');

ReactDOM.render((
    <div>
        Hello 123
        <br/>
        <Example/>
    </div>
), container);


