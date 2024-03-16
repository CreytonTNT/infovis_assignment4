import React from 'react';
import Bars from './bars';
import XAxis from './xAxis.js';
import YAxis from './yAxis.js';

function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation } = props;

    //task1: transform the <g> with the offsets so that the barchart can show properly
    const transform = `translate(${offsetX}, ${offsetY})`;
    
    //task2: import the components needed and uncomment the components in the return 
    return <g transform={transform}>
        <Bars data={data} xScale={xScale} yScale={yScale} height={height} width={width} selectedStation={selectedStation} setSelectedStation={setSelectedStation}/>
        <YAxis yScale={yScale} height={height} axisLable={"Bikers start from"}/>
        <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(20, 0)rotate(-90)`}>
            {"Bikers start from"}
        </text>
        <XAxis xScale={xScale} height={height} width={width} />
        </g>
}

export default BarChart