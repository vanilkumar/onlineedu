import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

class aboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "JavaTpoint" };
  }

  componentDidMount() {
    console.info('about us')
  }

 
  render() {
    return (
      <div>
        <h4>About US</h4>
      </div>
    );
  }
}
export default aboutUs;
