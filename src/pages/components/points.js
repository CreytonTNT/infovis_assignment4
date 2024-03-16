import React, { useState } from 'react';

function Points(props) {
    const { data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY, tooltipX, tooltipY} = props;

    const handleMouseEnter = (station, event) => {
        setSelectedStation(station);
        if (event) {
            setTooltipX(event.pageX);
            setTooltipY(event.pageY);
        }
    };

    const handleMouseOut = () => {
        setSelectedStation(null);
    };

    const getColor = (station) => {
        return station === selectedStation ? 'red' : 'steelblue';
    };

    const getRadius = (station) => {
        return station === selectedStation ? 10 : 5;
    };

    return (
        <g>
            {data.map((d, i) => (
                <circle
                    key={i}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={getRadius(d.station)}
                    fill={getColor(d.station)}
                    stroke="black"
                    strokeWidth={1}
                    onMouseEnter={() => handleMouseEnter(d.station)}
                    onMouseOut={handleMouseOut}
                />
            ))}
            {selectedStation && (
                <rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="yellow"
                    opacity={0.5}
                    onMouseOut={handleMouseOut}
                />
            )}
            {selectedStation === data.station && (
                <circle
                    cx={xScale(selectedStation.tripdurationS)}
                    cy={yScale(selectedStation.tripdurationE)}
                    r={getRadius(selectedStation)}
                    fill={getColor(selectedStation)}
                    stroke="black"
                    strokeWidth={1}
                    onMouseEnter={() => handleMouseEnter(selectedStation)}
                    onMouseOut={handleMouseOut}
                />
            )}
        </g>
    );
}

export default Points;



    //Note: 
    //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    // if(data){
    //     return <g>
    //     {data.map((d, i) => (
    //                 <circle
    //                     key={i}
    //                     cx={xScale(d.tripdurationS)}
    //                     cy={yScale(d.tripdurationE)}
    //                     r={5}
    //                     fill="steelblue"
    //                     stroke="black"
    //                     strokeWidth={1}
    //                 />
    //             ))}
    //     </g>
    // } else {
    //     return <g></g>
    // }