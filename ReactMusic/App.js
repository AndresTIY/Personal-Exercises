import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "./Components";
// import Header from "./Components/Header";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Playing from Charts" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "rgb(4,4,4)"
  }
};
