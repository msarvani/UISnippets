import React, {Component} from 'react';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Register/Register';
import { Switch, Route, Redirect } from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import TermsOfService from './Components/legal/TermsOfService';
import PrivacyPolicy from './Components/legal/PrivacyPolicy';
import Footer from './Components/Footer/Footer';


import './App.css';


class App extends Component{
  render(){

    let routes = (
      <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/termsofservice" component={TermsOfService}/>
          <Route path="/privacypolicy" component={PrivacyPolicy}/>
          <Route path="/footer" component={Footer}/>
          {/* <Route path="/login" component={Login}/> */}
          <Redirect to="/"/>
      </Switch>
    );


    return(
      <div className="App">
        {routes}
      </div>
    );
  }
}
export default App;
