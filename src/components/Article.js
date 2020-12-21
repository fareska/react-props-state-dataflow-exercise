import React, { Component } from 'react';

class Article extends Component {
  render() {
    return(
      
        <div>
          {this.props.info.color+" -  "}
          {this.props.info.type+" - "}
          {this.props.info.size+" -  "}
        </div>
      

    ) 

  }
}

export default Article