import React, { Component } from 'react';
import {Route} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import {BrowserRouter} from 'react-router-dom'; 
import HomePage from './containers/homePage.jsx';
import Login from './containers/login.jsx';
import ForgetPSW from './containers/forgetPsw.jsx';
import CreateAccount from './containers/createAccount.jsx';
import aboutus from './containers/aboutus.jsx';
import contactus from './containers/contactus.jsx';
// import DetailsPage from './containers/detailsPage.jsx';
// import CreateIssue from './containers/createIssue.jsx';
// import cretateProject from './containers/cretateProject.jsx';
// import displayList from './containers/displayList.jsx';
//import Register from './containers/register';
import 'bootstrap/dist/css/bootstrap.min.css';



class Fehs extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
        <BrowserRouter>
          <Route exact={true} path = "/" component={Login} />
          <Route path = "/home" component={HomePage} />
          <Route path = "/forgetpassword" component={ForgetPSW} />
          <Route path = "/register" component={CreateAccount} />
          <Route path = "/aboutus" component={aboutus} />
          <Route path = "/contactus" component={contactus} />
        {/*   <Route path = "/details" component={DetailsPage} />
          <Route path = "/cretateProject" component={cretateProject} />
          <Route path = "/createIssue" component={CreateIssue} />
          <Route path = "/projectList" component={displayList} />
        } <Route path = "/questions" component={QuestionPage} />
          <Route path = "/questions" component={QuestionPage} />
          <Route path = "/questions1" component={QuestionPageBath} />
          <Route path = "/questions2" component={QuestionPageShower} />
    <Route path = "/resultPage" component={ResultPage} /> */}
        </BrowserRouter> 
        </Provider>
      </div>
    );
  }
}

export default Fehs;
