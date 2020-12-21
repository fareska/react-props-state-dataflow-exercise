import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        let data = this.props.data
        let discount = this.props.discount

        return(
            <div>
            {/* {this.props.data.map(s=> < Item key={s.item} data={s} /> )} */}
            {data.map(s=> < Item key={s.item} data={s} discount={discount} /> )}
            </div>
        )

    }
}

export default Home