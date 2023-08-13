import React from "react";

import "./CounterOutput.css";

const CounterOutput = (props) => {
    return (
        <div className="counter-output">
            {props.value}
        </div>
    )
}

export default CounterOutput;
