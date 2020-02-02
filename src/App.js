import React, {Component} from 'react';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Register/Register';
import DropDownDate from '../src/Components/UI/DropDownDate/DropDownDate'

import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
          <DropDownDate/>
      </div>
    );
  }
}
export default App;
