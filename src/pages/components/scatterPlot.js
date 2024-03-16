import React from 'react';
import Points from './points.js';
import XAxis from './xAxis.js';
import YAxis from './yAxis.js';

function ScatterPlot(props) {
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY, tooltipX, tooltipY } = props;
    
    // task1: transform the <g> with the offsets so that the barchart can show properly
    const transform = `translate(${offsetX}, ${offsetY})`;

    // task2: import the components needed and uncomment the components in the return
    return (
        <g transform={transform}>
            <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} 
             selectedStation={selectedStation} setSelectedStation={setSelectedStation} setTooltipX = {setTooltipX} setTooltipY = {setTooltipY}
             tooltipX={tooltipX} tooltipY={tooltipY}/>
            <YAxis yScale={yScale} height={height} axisLabel={"Trip duration end in"} />
            <XAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration start from"} />
        </g>
    );
}

export default ScatterPlot


// function ScatterPlot(props){
//     const { offsetX, offsetY, data, xScale, yScale, height, width } = props;
//     //task1: transform the <g> with the offsets so that the barchart can show properly 
//     //task2: import the components needed and uncomment the components in the return
//     return <g>
//            {/* <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} />
//            <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"}/>
//            <XAxis xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"}/> */}
//         </g>
// }