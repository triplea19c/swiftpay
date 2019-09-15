import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import imageBackground from "../../../assets/images/new_background.jpg";
import styles from "./styles";
import { Table, Row, Rows } from "react-native-table-component";
//import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        "Transaction ID",
        "Type of transaction(mobile money, bank, card)",
        "Amount",
        "Status",
        "Date"
      ],
      tableData: [
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"]
      ]
    };
  }
  render() {
    return (
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        {/* <Image
            source={require("../../../assets/images/drawer.png")}
            style={styles.drawerImage}
          /> */}
        <View style={styles.container}>
          <Text style={styles.sendText}>Transactions Screen</Text>
        </View>
        <View style={styles.firstContainer}>
          const state = this.state; return (
          <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          </View>
          )
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 }
});
// export default createMaterialBottomTabNavigator({
//   Home: { screen: Dashboard },
//   Account: { screen: Account },
//   Transfer: { screen: Transfer },
//   History: { screen: History },
//   Profile: { screen: Profile }
// }, {
//     initialRouteName: 'Dashboard',
//     activeColor: '#f0edf6',
//     inactiveColor: '#3e2465',
//     barStyle: { backgroundColor: '#694fad' }
//   });
