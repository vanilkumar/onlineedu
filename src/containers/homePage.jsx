import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
import Footer from '../components/Footer'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  createProject = () => {
    this.props.history.push('cretateProject');
  }
  createIssue = () => {
    this.props.history.push('createIssue');
  }
  projectList= () => {
    this.props.history.push('projectList');
  }

  render() {
    return (
      <React.Fragment>
        <Header showlink={true} />
        <div className="home-wrapper">
          <div className="nav-container">
            <div className="nav-container-item" onClick={this.createProject}>
              <div className="icon">
                <img data-src="images/project-icon.png" className="img-responsive lazyloaded"
                  src="images/project-icon.png" />
              </div>
              <div className="label">Create Project</div>
            </div>
            <div className="nav-container-item" onClick={this.createIssue}>
              <div className="icon">
                <img data-src="https://3fee7a1sld751eqrjr3a035t-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nation.png" className="img-responsive lazyloaded"
                  src="https://3fee7a1sld751eqrjr3a035t-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nation.png" />

              </div>
              <div className="label">Create Issue</div>
            </div>
          </div>
          <div className="nav-container" onClick={this.projectList}>
            <div className="nav-container-item">
              <div className="icon">
                <img data-src="https://3fee7a1sld751eqrjr3a035t-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nation.png" className="img-responsive lazyloaded"
                  src="https://3fee7a1sld751eqrjr3a035t-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nation.png" />

              </div>
              <div className="label">Project List</div>
            </div>
            <div className="nav-container-item" >
              <div className="icon">
                <img data-src="https://3fee7a1sld751eqrjr3a035t-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nation.png" className="img-responsive lazyloaded"
                  src="https://3fee7a1sld751eqrjr3a035t-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nation.png" />

              </div>
              <div className="label">Issue List</div>
            </div>
          </div>

        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.LoginData.formdata
  }
}
export default connect(mapStateToProps)(HomePage);

