import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.js";
import Users from "./components/users/Users.js";
import "./App.css";

class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
