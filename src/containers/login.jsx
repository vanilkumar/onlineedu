import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
import Footer from '../components/Footer'
//import { setDefalutStatus } from '../actions/CreateAgreementAction';
import { projectList,createAcc } from '../actions/LoginAction';
//import './../css/login.css';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }
  componentDidMount() {
    this.props.dispatch(createAcc());
  }
  componentWillReceiveProps(nextProps) {
		console.info(77777,'newprops',nextProps.isLogin)
	}
  login = () => {
    const data = [{ name: this.state.username, psw: this.state.password }]
    /* this.props.dispatch(login(data));
    console.info(99999,'jsx',this.props.isLogin)
    if(this.props.isLogin){
      this.props.history.push('home');
    } */
    this.props.history.push('home');
  }
  forgetPSW = () => {
    this.props.history.push('forgetpassword');
  }
  createAccount = () => {
    this.props.history.push('register');
  }
  userName = (e) =>{
    this.setState({username:e.target.value},function(){})
  }
  password = (e) =>{
    this.setState({password:e.target.value},function(){})
  }

  render() {
    console.info(this.props)
    return (
      <React.Fragment>
        <Header />
        
        
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.LoginData.formdata,
    isLogin:state.ProjectList.login
  }
}

export default connect(mapStateToProps)(Login);
