import React, { Component } from "react";


class CoolButton extends Component {

    render() {
        return (

            <button className={this.props.className}>{this.props.text}</button>
        )
    }
}

export default CoolButton