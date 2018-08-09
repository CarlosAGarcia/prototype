import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class custInfo extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="name"> </div>
        <div id="phoneNumber"> </div>
        <div id="email"> </div>
        <div id="pickupDate"> </div>
        <div id="additionalNotes"> </div>
      </div>
    );
  }
}

class FillForm extends Component {
  /*styles = {
    width: "50%",
    display: "flex",
    align-items: "center"

  };*/
  state = {
    headers: ["Firstname", "Lastname", "Email", "hello"],
    item1: ["Firstname", "Lastname", "Email", "hello"],
    item2: ["Firstname", "Lastname", "Email", "hello"],
    item3: ["Firstname", "Lastname", "Email", "hello"]
  };
  populateTable => ()

  }
  render() {
    return (
      <div className="centered">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              {this.state.headers.map(headers => (
                <th key={headers}> {headers}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.item1.map(item1 => <th key={item1}> {item1}</th>)}
            </tr>
            <tr>
              {this.state.item2.map(item2 => <th key={item2}> {item2}</th>)}
            </tr>
            <tr>
              {this.state.item3.map(item3 => <th key={item3}> {item3}</th>)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div id="homePage">
        <FillForm />
      </div>
    );
  }
}

export default App;
