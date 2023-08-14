import React from "react";
import { connect } from "react-redux";

import CounterControl from "../components/CounterControl/CounterControl.js";
import CounterOutput from "../components/CounterOutput/CounterOutput.js";


import "./Counter.css";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <div className="controls">
                    <br/>
                    <CounterControl label="َIncrement" click={this.props.onIncrement} />
                    <br/>
                    <CounterControl label="َDecrement" click={this.props.onDecrement}  />
                    <br/>
                    <CounterControl label="َAdd" click={this.props.onAdd}  />
                    <br/>
                    <CounterControl label="Min" click={this.props.onMin}  />
                    <br/>
                </div>
                <div>
                    <button onClick={() => this.props.showResult(this.props.ctr)}>Show Store</button>
                    {this.props.scr.map((item) => {
                        return (
                            <p key={item}>{item}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        scr: state.scores,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onAdd: () => dispatch({type: 'ADD', value: 2}),
        onMin: () => dispatch({type: 'MIN', value: 2}),
        showResult: (value) => dispatch({type: 'SHOW', value:value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
