import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { decrement, increment } from "../redux/actions/counter";

function Main(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, fontWeight: "bold" }}>{props.count}</Text>
      <StatusBar style="auto" />
      <Button onPress={() => props.increment(props.count)} title="increase" />
      <Button onPress={() => props.decrement(props.count)} title="decrease" />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    name: state.profile.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (count) => dispatch(increment(count + 1)),
    decrement: (count) => dispatch(decrement(count - 1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
