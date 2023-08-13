import React from "react";
import { connect } from "react-redux";

import CounterControl from "../components/CounterControl/CounterControl.js";
import CounterOutput from "../components/CounterOutput/CounterOutput.js";


import "./Counter.css";

class Counter extends React.Component {
    counterChangeHandler(op) {
        switch(op) {
            case 'inc':
                this.setState({
                    counter: this.props.ctr + 1
                });
                break;
            case 'dec':
                this.setState({
                    counter:  this.props.ctr - 1
                });
                break;
            case 'add':
                this.setState({
                    counter:  this.props.ctr + 2
                });
                break;
            case 'min':
                this.setState({
                    counter:  this.props.ctr - 2
                });
                break;
            default:
                this.setState({
                    counter:  this.props.ctr
                });
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <div>
                    <br/>
                    <CounterControl label="َIncrement" click={() => this.counterChangeHandler('inc')} />
                    <br/>
                    <CounterControl label="َDecrement" click={() => this.counterChangeHandler('dec')}  />
                    <br/>
                    <CounterControl label="َAdd" click={() => this.counterChangeHandler('add')}  />
                    <br/>
                    <CounterControl label="Min" click={() => this.counterChangeHandler('min')}  />
                    <br/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
    }
}

export default connect(mapStateToProps)(Counter)
