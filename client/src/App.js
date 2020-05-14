import React, { Component } from 'react'
import './App.css';
import MessageBox from "./MessageBox";
import ListMessage from './ListMessage';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <MessageBox />
          <ListMessage />
        </div>
      </div>
    );
  }  
}

export default App;
