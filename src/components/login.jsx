import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './header.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showRegister: false,
      showLogin: false,
      name:'',
      mail:'',
      phno:'',
      
    }
  }
  readInput =(e,field)=>{
    this.setState({
      [field]:e.target.value
    })
  }
  render() {
    console.info(999, this.props.showlink)
    return (
      <div className='form'>
        <h4 className='txt-center'>Login</h4>
        <div className='row'>
          <div className='col-md-12 txt-center'>
            <input type="text" className="input-class" id="fname" onChange={(e) => this.readInput(e, 'name')} placeholder="Name" name="adress1" required />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 txt-center'>
            <input type="text" className="input-class" id="lname" onChange={(e) => this.readInput(e, 'mail')} placeholder="E-Mail" name="lname" required />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 txt-center'>
            <input type="text" className="input-class" id="fname" onChange={(e) => this.readInput(e, 'phno')} placeholder="Phone number" name="adress1" required />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <Button variant="primary" onClick={this.props.submitEvnt(this.state,'login')}>
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
