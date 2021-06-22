import React, { Component } from "react";
import { render } from "react-dom";
import clickCounter from "../components/clickCounter";

class Instruction extends Component {
    state = {
        hasClicked: true,
        clicks
    }
    componentDidMoutn = () => {
        this.setState({ 
            hasClicked: false,
            clicks: 0
        })
    }

    render() {
        const hasClicked = this.state.hasClicked;
        var clicks = this.state.clicks;
        return (
            <div>
                {hasClicked ? (
                    <div>
                        <clickCounter clicks={clicks} />
                    </div>
                ) : (
                    <div>
                        <p>Click Anywhere to Begin.</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Instruction;