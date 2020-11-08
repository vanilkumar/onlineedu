import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
import Footer from '../components/Footer'
//import { setDefalutStatus } from '../actions/CreateAgreementAction';
import { projectList,login } from '../actions/LoginAction';

class cretateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      id:'',
      status:'',
      technologies:'',
      projectSdate:'',
      projectEdate:'',
      projectDesc:''
    }
  }
  projectName= (e) =>{
   // console.info('projectName',e.target.value)
    this.setState({
      name:e.target.value
    })
  }
  projectId = (e) =>{
    //console.info('projectID',e.target.value)
   this.setState({
      id:e.target.value
    })
  }
  projectStatus = (e) =>{
    //console.info('projectStatus',e.target.value)
    this.setState({
      status:e.target.value
    })
  }
  projectTechnologies = (e) =>{
    //console.info('technologies',e.target.value)
    this.setState({
    technologies:e.target.value
    })
  }
  projectSdate = (e) =>{
    //console.info('projectsdate',e.target.value)
    this.setState({
      projectSdate:e.target.value
    })
  }
  projectEdate = (e) =>{
    //console.info('projectEdate',e.target.value)
    this.setState({
      projectEdate:e.target.value
    })
  }
  projectDesc= (e) =>{
   // console.info('projectDesc',e.target.value)
    this.setState({
      projectDesc:e.target.value
    })
  }
  postReq= (e) => {
    const obj = {
      projectName:this.state.name,
      status:this.state.status,
      description:this.state.projectDesc,
      technologies:this.state.technologies,
      startDate:this.state.projectSdate,
      endDate:this.state.projectEdate,
      "userId":"1"
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="login-wrapper jumbotron">
          <h3 className="text-center text-primary">Create Project Form</h3>
          <form className="needs-validation" validate>
            <div className="form-group">
              <label for="uname">Project Name : </label>
              <input type="text" className="form-control" id="uname" onChange={(e)=>this.projectName(e)} placeholder="Project Name" name="uname" required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
              <label for="id">Project Id : </label>
              <input type="text" className="form-control" id="id" onChange={(e)=>this.projectId(e)} placeholder="Enter project id" name="pswd" required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
              <label for="status" className="control-label">Status
                        <span className="asteriskField">*</span>
              </label>
              <div className="controls">
                <select name="cars"  type="number" onChange={(e)=>this.projectStatus(e)} className="form-control">
                  <option value="Not-Started">Not-Started</option>
                  <option value="In-Progress">In-Progress</option>
                  <option value="Review">Review</option>
                  <option value="Testing">Testing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="technologies" className="control-label">Technologies
                    <span className="asteriskField">*</span>
              </label>
              <div className="controls">
                <select name="cars"  type="number" className="form-control" onChange={(e)=>this.projectTechnologies(e)} >
                  <option value="Select">Select</option>
                  <option value="ui">UI</option>
                  <option value="python">Python</option>
                  <option value="php">Php</option>
                  <option value="java">Java</option>
                  <option value="dotnet">Dot Net</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="id">Start Date : </label>
              <input type="date" className="form-control" id="id" onChange={(e)=>this.projectSdate(e)} placeholder="Start Date" name="pswd" required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
              <label for="id">End Date : </label>
              <input type="date" className="form-control" id="id" onChange={(e)=>this.projectEdate(e)} placeholder="End Date" name="pswd" required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
              <label for="p_name" className="control-label">Description
                    <span className="asteriskField">*</span>
              </label>
              <div className="controls">
                <textarea onChange={(e)=>this.projectDesc(e)}></textarea>
              </div>
            </div>
            <div className="button_fields">
              <button type="button" className="btn btn-success">Submit</button>
              <button type="button" className="btn btn-danger ml-3">Cancel</button>
            </div>
          </form>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default cretateProject;
