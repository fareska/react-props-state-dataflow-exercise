import React, { Component } from 'react';

class Item extends Component {

    render() {
        return (
            <div>
                {
                    this.props.discount
                        ? <p>{this.props.data.item} is cost {(this.props.data.price)*(1-(this.props.data.discount))} USD</p>
                        : <p>{this.props.data.item} is cost {this.props.data.price} USD</p>
                }
            </div>

        )

    }
}

export default Item