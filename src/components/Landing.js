import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */

    hottest = (arr)=>{
        let hottest = []
        for(let a of arr){
            if(a.hottest) hottest.push(a)
        }
        return hottest
    }

    render() {
        
        let hottest = this.hottest(this.props.data)
        return (
            <div>
                welcome {this.props.name}, The hottest item is {hottest.map(d=> d.item +' for ' + d.price)}
                
            </div>
        )

    }
}

export default Landing