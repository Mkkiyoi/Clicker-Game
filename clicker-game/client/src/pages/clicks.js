import React, { Component } from "react";
import { render } from "react-dom";
import clickCounter from "../components/clickCounter";

class Clicks extends Component {
    state = {
        clicks
    }

    render() {
        var clicks = this.state.clicks;
        return (
            <div>
                <clickCounter clicks={clicks} />
            </div>
        );
    }
}

export default Clicks;