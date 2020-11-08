import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './header.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      show:false,
      showRegister:false,
      showLogin:false,
      password:'',
      mail:'',
      phno:'',
      country:''
    }
  }
  readInput =(e,field)=>{
    this.setState({
      [field]:e.target.value
    })
  }
  submitRegister =()=>{
    this.props.submitEvnt(this.state)
  }

  render() {
    return (
      <div className='form'>
      <h4 className='txt-center'>Register</h4>
      <div className='row'>
        <div className='col-md-12 txt-center'>
          <input type="text" className="input-class" id="mail" onChange={(e) => this.readInput(e, 'mail')} placeholder="Name" name="adress1" required />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 txt-center'>
          <input type="password" className="input-class" id="pwd" onChange={(e) => this.readInput(e, 'password')} placeholder="E-Mail" name="lname" required />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 txt-center'>
          <input type="text" className="input-class" id="phno" onChange={(e) => this.readInput(e, 'phno')} placeholder="Phone number" name="adress1" required />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 txt-center'>
          <input type="text" className="input-class" id="country" onChange={(e) => this.readInput(e, 'country')} placeholder="Phone number" name="adress1" required />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <Button variant="primary" onClick={this.submitRegister}>
            Submit
          </Button>
          <Button variant="danger" onClick={this.props.closeEvnt}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
    );
  }
}

export default Header;
