import React from "react";

import "./CounterControl.css";

const CounterControl = (props) => {
    return  (
        <div className="counter-control" onClick={props.click}>
        {props.label}
      </div>
    )
}

export default CounterControl;
