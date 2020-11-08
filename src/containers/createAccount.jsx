import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Header from './../components/Header.jsx';
import Footer from './../components/Footer.jsx';
import { createAcc } from '../actions/LoginAction';
//import './../css/login.css';
import './style.css'
const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
};

const reducer = combineReducers(reducers);
class createAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "JavaTpoint" };
  }

  componentDidMount() {
    this.props.dispatch(createAcc());
  }

  createAccount = (values) => {
    console.log(values)
  }
  render() {
    return (
      <div>
        {/* <Header showlink={false} /> */}
        <Header showlink={false} />

        <div class="registration-wrapper">
          <div className='row'>
            <div className='col-md-12'>
              <div class="login-form-title">
                Registration
        </div>
            </div></div>
          <form class="needs-validation form-wrapper" validate>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="fname" onChange={(e) => this.userName(e)} placeholder="First Name" name="fname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="lname" onChange={(e) => this.password(e)} placeholder="Last Name" name="lname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="phname" onChange={(e) => this.userName(e)} placeholder="Mobile Number" name="pnno" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="email" onChange={(e) => this.password(e)} placeholder="E-Mail" name="email" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="password" class="input-class" id="fname" onChange={(e) => this.userName(e)} placeholder="Passwrd" name="psw" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="password" class="input-class" id="lname" onChange={(e) => this.password(e)} placeholder="Confirm Password" name="cpsw" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="fname" onChange={(e) => this.userName(e)} placeholder="Address 1" name="adress1" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="lname" onChange={(e) => this.password(e)} placeholder="Address 2" name="lname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="fname" onChange={(e) => this.userName(e)} placeholder="District" name="adress1" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="lname" onChange={(e) => this.password(e)} placeholder="State" name="lname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="fname" onChange={(e) => this.userName(e)} placeholder="Country" name="adress1" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">
                  <input type="text" class="input-class" id="lname" onChange={(e) => this.password(e)} placeholder="pin/zip code" name="lname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="fname" onChange={(e) => this.userName(e)} placeholder="Star" name="adress1" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">
                  <input type="text" class="input-class" id="lname" onChange={(e) => this.password(e)} placeholder="Zodic Sign" name="lname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="fname" onChange={(e) => this.userName(e)} placeholder="Caste" name="adress1" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">
                  <input type="text" class="input-class" id="lname" onChange={(e) => this.password(e)} placeholder="Ghotram" name="lname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div class="form-group">

                  <input type="text" class="input-class" id="fname" onChange={(e) => this.userName(e)} placeholder="Highest Qualification" name="adress1" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="form-group">
                  <input type="text" class="input-class" id="lname" onChange={(e) => this.password(e)} placeholder="Job Details" name="lname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 text-center">
                <button type="button" onClick={this.login} class="btn btn-quest">Submit</button>
              </div>
            </div>
          </form>

        </div>

        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.LoginData.formdata,
    isLogin: state.ProjectList.login
  }
}


export default connect(mapStateToProps)(createAccount);
