import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/index";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Text>Everything is alright!!!</Text>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
