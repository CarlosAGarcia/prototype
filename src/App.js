import React, { Component } from "react";
//import logo from "./logo.svg";
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
  state = {
    headers: ["Product code", "Product Name", "Quantity", "Additional notes"],
    item1: ["Firstname", "Lastname", "", "hello"],
    item2: ["Firstname", "Lastname", "", "hello"],
    item3: ["Firstname", "Lastname", "", "hello"]
  };

  /* Needs to create constructor and super and bind 'this' 
  populateTable() {
    CODE
  }
  */
  populateTable = () => {
    console.log("called");
  };

  isEditable = () => {
    // const isQuantity = item == "" ? true : false;
    return true;
  };

  render() {
    return (
      <div className="centered table-editable">
        <table className="table table-bordered table-hover table-striped table-responsive-md">
          <thead>
            <tr>
              {this.state.headers.map(headers => (
                <th key={headers} className="text-center">
                  {" "}
                  {headers}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.item1.map(item1 => (
                <td
                  key={item1}
                  className="text-center "
                  contentEditable={item1 === "" ? true : false}
                >
                  {" "}
                  {item1}
                </td>
              ))}
            </tr>
            <tr>
              {this.state.item2.map(item2 => (
                <td
                  key={item2}
                  className="text-center"
                  contentEditable={item2 === "" ? true : false}
                >
                  {" "}
                  {item2}
                </td>
              ))}
            </tr>
            <tr>
              {this.state.item3.map(item3 => (
                <td
                  key={item3}
                  className="text-center"
                  contentEditable={item3 === "" ? true : false}
                >
                  {" "}
                  {item3}
                </td>
              ))}
            </tr>
            <tr>
              {this.state.item1.map(item1 => {
                this.populateTable();
              })}
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
