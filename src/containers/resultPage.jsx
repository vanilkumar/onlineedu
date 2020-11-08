import React, { Component } from 'react';


class ResultPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputQuery:""
        }
    }
    handleSearch(data){
        console.log("DATAT GOT IN MAIN SIDE",data);
        this.setState({
            inputQuery:data
        })
    }
    gotoQuestion(){
        alert(1)
    }
  render() {
    return (
      <div className="container">
     result
      </div>
    );
  }
}

export default ResultPage;
