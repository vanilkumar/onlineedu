import React, { Component } from 'react';
import Header from './../components/Header.jsx'
import Footer from './../components/Footer.jsx'

class forgetPsw extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  gotoQuestion() {
    console.info(6666);
    this.props.history.push('questions');
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="login-wrapper jumbotron">
          <form className="needs-validation" validate>
            <div className="form-group">
              <label for="uname">E-Mail:</label>
              <input type="text" className="form-control" id="uname" placeholder="Enter E-Mail" name="uname" required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <button type="button"  className="btn btn-primary">Submit</button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default forgetPsw;
