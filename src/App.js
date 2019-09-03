import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  foo = () => "bars";
  render() {
    const name = "Axel Roffi";
    const loading = false;
    const showName = true;
    return (
      <div className='App'>
        {loading ? <h4>LOADING...</h4> : <h1>Hello {showName && name}</h1>}
      </div>
    );
  }
}

export default App;
