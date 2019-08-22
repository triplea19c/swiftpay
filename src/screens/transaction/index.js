import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import imageBackground from "../../../assets/images/new_background.jpg";
import styles from "./styles";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

export default class TransactionScreen extends Component {
  render() {
    return (
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <View>
          {/* <Image
            source={require("../../../assets/images/drawer.png")}
            style={styles.drawerImage}
          /> */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.sendText}>
              Where would you like to send funds to?
            </Text>
          </View>
          <View style={styles.firstContainer}>
            <View>
              <TouchableOpacity>
                <Image source={require("../../../assets/images/Ellipse.png")} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={require("../../../assets/images/Ellipse_2.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={require("../../../assets/images/Ellipse_3.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secondContainer}>
            <View>
              <TouchableOpacity>
                <Image
                  source={require("../../../assets/images/Ellipse_4.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={require("../../../assets/images/Ellipse_5.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={require("../../../assets/images/Ellipse_5.1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

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
