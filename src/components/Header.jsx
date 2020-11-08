import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/IMG-20200805-WA0006.svg';
import { Modal, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import Login from './login'
import Register from './register'
import './header.css';
import { projectList,createAcc } from '../actions/LoginAction';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showRegister: false,
      showLogin: false
    }
  }

  handleClose = () => {
    this.setState({
      show: false,
      showRegister: false,
      showLogin: false
    })
  }
  register = () => {
    this.setState({
      show: true,
      showRegister: true,
      showLogin: false
    })
  }
  login = () => {
    this.setState({
      show: true,
      showRegister: false,
      showLogin: true
    })
  }
  handleSubmit = (data) => {
    console.info(222,data)
    if(this.state.showRegister){
    //  this.submitRegister(data);
    }
    else{
     // this.submitLogin(data)
    }
  }


  render() {
    console.info(999, this.props.showlink)
    return (
      <header className="header-area">
        <div className="top-header">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 h-100">
                <div className="header-content h-100 d-flex align-items-center justify-content-between">
                  <div className="academy-logo">
                    <a href="index.html"><img src={logo} alt="logo" /></a>
                  </div>
                  <div className="login-content">
                    <a href="#">
                      <span onClick={this.register} >Register</span> / <span onClick={this.login} >Login</span> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="academy-main-menu">
          <div className="classNamey-nav-container breakpoint-off">
            <div className="container">

              <nav className="classy-navbar justify-content-between" id="academyNav">


                <div className="classy-navbar-toggler">
                  <span className="navbarToggler"><span></span><span></span><span></span></span>
                </div>


                <div className="classy-menu">


                  <div className="classycloseIcon">
                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                  </div>


                  <div className="classynav">
                    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                          <NavDropdown title="Course" id="collasible-nav-dropdown">
                            <div className="row">
                              <div className="col-md-6">
                                <h4>Level 1</h4>
                                <NavDropdown.Item href="#action/3.1">AP Constable</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Grama Sachivalayam</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">RRB Group-D & Clerk</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">APPSC Gr 3 & 4</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">SSC Constable</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Defence-Openrally</NavDropdown.Item>
                              </div>
                              <div className="col-md-6">
                                <h4>Level 2</h4>
                                <NavDropdown.Item href="#action/3.1">IBPS-PO</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">LIC AO & ADO</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">RRB ASM</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">APPSC Gr 1 & 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">I-CET</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">CAT</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">MAT</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">SSC-CGL</NavDropdown.Item>
                              </div>
                            </div>
                          </NavDropdown>
                          <Nav.Link href="/aboutus">About Us</Nav.Link>
                          <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                          <div className="calling-info">
                            <div className="call-center">
                              <a href="tel:+654563325568889"><i className="icon-telephone-2"></i> <span>(+65) 456 332 5568 889</span></a>
                            </div>
                          </div>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                  </div>
                </div>

              </nav>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Confirm Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.showRegister && <Register submitEvnt={this.handleSubmit} closeEvnt={this.handleClose} />}
            {this.state.showLogin && <Login submitEvnt={this.handleSubmit} closeEvnt={this.handleClose} />}
          </Modal.Body>
        </Modal>
      </header>
    );
  }
}

export default Header;
