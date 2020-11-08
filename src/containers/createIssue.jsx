import React, { Component } from 'react';
import Header from './../components/Header.jsx'
import Footer from './../components/Footer.jsx'

class createIssue extends Component {
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
        <div class="login-wrapper jumbotron">
          <h3 class="text-center text-primary">Issue Project Form</h3>
          <form class="needs-validation" validate>
            <div class="form-group">
              <label for="uname">Issue Name : </label>
              <input type="text" class="form-control" id="uname" placeholder="Issue Name" name="uname" required />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-group">
              <label for="id">Issue Id : </label>
              <input type="text" class="form-control" id="id" placeholder="Enter Issue id" name="pswd" required />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-group">
              <label for="status" class="control-label">Status
                        <span class="asteriskField">*</span>
              </label>
              <div class="controls">
                <select name="cars" style="margin-bottom: 10px" type="number" class="form-control">
                  <option value="#">Not-Started</option>
                  <option value="ui">In-Progress</option>
                  <option value="python">Review</option>
                  <option value="php">Testing</option>
                  <option value="java">Completed</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="technologies" class="control-label">Technologies
                    <span class="asteriskField">*</span>
              </label>
              <div class="controls">
                <select name="cars" style="margin-bottom: 10px" type="number" class="form-control">
                  <option value="#">Select</option>
                  <option value="ui">UI</option>
                  <option value="python">Python</option>
                  <option value="php">Php</option>
                  <option value="java">Java</option>
                  <option value="dotnet">Dot Net</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="id">Start Date : </label>
              <input type="date" class="form-control" id="id" placeholder="Start Date" name="pswd" required />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-group">
              <label for="id">End Date : </label>
              <input type="date" class="form-control" id="id" placeholder="End Date" name="pswd" required />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-group">
              <label for="p_name" class="control-label">Description
                    <span class="asteriskField">*</span>
              </label>
              <div class="controls">
                <textarea style="width: 100%"></textarea>
              </div>
            </div>
            <div class="button_fields">
              <button type="button" class="btn btn-success">Submit</button>
              <button type="button" class="btn btn-danger ml-3">Cancel</button>
            </div>
          </form>
        </div>
        <Footer />
      </React.Fragment >
    );
  }
}

export default createIssue;
