import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header.jsx';
import './style.css'
//import Footer from '../components/Footer.jsx';

class contactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', mail: '', phno: "", msg: '' };
  }

  componentDidMount() {
    console.info('about us')
  }
  readInput = (e, txt) => {
    this.setState({ [txt]: e.target.value })
  }
  submit = () => {
    console.info(999, this.state)
    const url = 'https://dev-anilv-services.herokuapp.com/api/v1/services/contact';
    const obj = {
      name: this.state.name,
      email: this.state.mail,
      phone: this.state.phno,
      topics: "INDIA",
      message: this.state.msg
    }
    axios.post(url, obj, {
      headers:
      {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        console.info(9999, 'action', response)

      })
      .catch((response) => { return Promise.reject(response); });
  }


  render() {

    return (
      <div>
        <Header />

        <div className='container'>
          <div className='form'>
            <h4 className='txt-center'>Contact Us</h4>
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
              <div className='col-md-12 txt-center'>
                <textarea type="text" className="input-class" id="lname" onChange={(e) => this.readInput(e, 'msg')} placeholder="Message" name="lname" required />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <button className='btn btn-primary' onClick={this.submit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default contactUs;
