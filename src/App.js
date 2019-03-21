import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';


class App extends Component {
  componentDidMount(){

   var ref = firebase.database().ref('data/devices/one')

   ref.on("value", function(snapshot) {
    if (snapshot.val()) {
      alert ('DEVICE 1 : Emergency at \n12.9709808,79.163803');

      ref.set(0);
    }
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


  }


  render() {
    return (
      <div className="App">
        <h1
        style={{
          "color" : "#909090",
          "marginTop": "42vh"
        }}
        >Alerts will be displayed here</h1>
      </div>
    );
  }
}

export default App;
