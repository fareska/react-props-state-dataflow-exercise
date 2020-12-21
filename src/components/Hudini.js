import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <div>
                {this.state.show ? <p> Now you see me</p> :<p> Now you don't</p>}
            </div>
        )

    }
}

export default Hudini