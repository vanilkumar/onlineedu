import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import Header from '../components/Header'
import Footer from '../components/Footer'
//import './../css/login.css';
import './style.css'
//import Header from '../components/header';


class Register extends Component {
   constructor(props) {
      super(props);
      this.state = { hello: "JavaTpoint" };
      this.changeState = this.changeState.bind(this)
   }
   componentWillMount() {
      console.log('Component Will MOUNT!')
   }
   componentDidMount() {
      console.log('Component Did MOUNT!')
   }
   changeState() {
      this.setState({ hello: "All!!- Its a great reactjs tutorial." });
   }
   componentWillReceiveProps(newProps) {
      console.log('Component Will Recieve Props!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component Will UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component Did UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component Will UNMOUNT!')
   }
   render() {
      return (
         <div>
            {/* <Header showlink={false} /> */}
            <Header showlink={false} />
            <RegisterForm />
            <Footer />
         </div>
      );
   }
}
class registerForm extends Component {
   render() {
     const { handleSubmit } = this.props;
     return (
       <form class="needs-validation form-wrapper" onSubmit={handleSubmit}>
         <div>
           <label htmlFor="firstName">First Name</label>
           <Field name="firstName" component="input" type="text"/>
         </div>
         <div>
           <label htmlFor="lastName">Last Name</label>
           <Field name="lastName" component="input" type="text"/>
         </div>
         <div>
           <label htmlFor="email">Email</label>
           <Field name="email" component="input" type="email"/>
         </div>
         <button type="submit">Submit</button>
       </form>
     );
   }
 }
 
 // Decorate the form component
 const RegisterForm = reduxForm({
   form: 'contact' // a unique name for this form
 })(registerForm);
 

export default Register;
