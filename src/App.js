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
  constructor(props) {
    super(props);
    this.showStuff3 = this.createTDs.bind(this);
    this.createTRs = this.createTRs.bind(this);
  }

  state = {
    headers: ["Product code", "Product Name", "Quantity", "Additional notes"],
    item1: ["Firstname", "Lastname", "", "hello"],
    item2: ["Firstname", "Lastname", "", "hello"],
    item3: ["Firstname", "Lastname", "", "hello"],
    items: [
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname1 ", "Lastname1 ", "", "hello1 "]
    ]
  };

  //creates all the Rows in given item as <tr> and children as <td>
  createTRs(items) {
    var rows = [];
    for (var i = 0; i < items.length; i++) {
      rows.push(<tr key={i}>{this.createTDs(items[i])}</tr>);
    }
    var k = this.createTDs(items[0]);
    return rows;
  }

  //gives all the columns in a given param as array of tds
  createTDs(items) {
    console.log("SHOWSTUFF " + items);
    console.log(items.length);
    let cols = [];
    for (var i = 0; i < items.length; i++) {
      cols.push(
        <td
          key={i}
          className="text-center "
          contentEditable={items[i] === "" ? true : false}
        >
          {items[i]}
        </td>
      );
    }

    return cols;
  }

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
          <tbody>{this.createTRs(this.state.items)}</tbody>
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

export default App; /*
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
            </tr>*/
