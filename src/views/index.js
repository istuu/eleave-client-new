import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    if(localStorage.getItem("role") === 'admin'){
      return <Redirect to="/admin" />
    }else if(localStorage.getItem("role") === 'employee') {
      return <Redirect to="/employee" />
    }
    
  }
}
export default Main;
