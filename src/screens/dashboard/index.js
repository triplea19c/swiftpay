import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet
} from "react-native";
import imageBackground from "../../../assets/images/new_background.jpg";
import Services from "../services";
import Swipe from "../swipe";
import Top from "../top";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import styles from "./styles";
import walletImage from "../../../assets/images/wallet.png";
import Signup from "./../signup";
import Transfer from "../transfer";
import Logout from "../logout";
const ROOT_URL = "https://ab5626b6.ngrok.io/api/v1/";

class NavigationDrawerStructure extends Component {
  //Structure for the navigating Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/* Donute Button Image */}
          <Image
            source={require("../../../assets/images/drawer.png")}
            style={styles.drawerImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

class Dashboard extends Component {
// const ROOT_URL = "https://ab5626b6.ngrok.io/api/v1/";
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      authenticated: false
    }
  }

  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem('token');

      if (token !== null) {
        var request = new Request(`${ROOT_URL}user/details`, {
          method: "GET",
          headers: new Headers({
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${token}`,
            "Accept": 'application/json'
          })
        });

        const detailsRequest = await fetch(request);
        const detailsResponse = await detailsRequest.json();
        console.log(detailsResponse);
        this.setState({ isLoading: false})

      } else {
        console.log(`Error getting token: `);
        this.setState({ isLoading: false, authenticated: false })
      }
     } catch (error) {
       console.log(`Error getting token: ${error}`);
       this.setState({ isLoading: false, authenticated: false })
     }
  }


  render() {
    const {isLoading, authenticated} = this.state

    if(!isLoading) {
      return (
        <View style={styles.mainContainer}>
          <ImageBackground
            source={imageBackground}
            style={styles.topImageBackground}>
            <TouchableOpacity>
              <Image source={walletImage} style={styles.walletImage} />
            </TouchableOpacity>
            <View style={styles.outerContainer}>
              <View>
                <TouchableOpacity>
                  <Image source={require("../../../assets/images/swipe.png")} />
                </TouchableOpacity>
                <Text style={styles.text}>SWIPE TO PAY</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Transfer")}>
                  <Image
                    source={require("../../../assets/images/transfer.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.text}>TRANSFER</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/images/services.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.text}>SERVICES</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Image source={require("../../../assets/images/topup.png")} />
                </TouchableOpacity>
                <Text style={styles.text}>TOP-UP</Text>
              </View>
            </View>
            {/* <Text style={styles.favorites}>MY FAVORITES</Text>
            <View style={styles.outerContainer}>
              <View style={styles.innerMtnContainer}>
                <TouchableOpacity>
                  <Image source={require("../../../assets/images/mtn.png")} />
                </TouchableOpacity>
              </View>
              <View style={styles.innerContainer}>
                 <TouchableOpacity style={styles.ssnitBackground}>
                   <Image source={require("../../../assets/images/ssnit.jpg")} />
                 </TouchableOpacity>
              </View>
               <View style={styles.innerContainer}>
                 <TouchableOpacity style={styles.vodaBackground}>
                  <Image source={require("../../../assets/images/voda.png")} />
                 </TouchableOpacity>
               </View>
               <View style={styles.innerContainer}>
                 <TouchableOpacity style={styles.pdsBackground}>
                   <Image source={require("../../../assets/images/pds.png")} />
                 </TouchableOpacity>
               </View>
            </View> */}
          </ImageBackground>
        </View>
      );
    }else {
      return <View style={acc.loadingScreen}><ActivityIndicator /></View>
    }
  }
}

const Screen_StackNavigator = createStackNavigator({
  //All the screen from the First Screen will be indexed here
  First: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: "Dashboard",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FFFFFF"
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen1_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Second: {
    screen: Swipe,
    navigationOptions: ({ navigation }) => ({
      title: "Swipe To Pay",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FFFFFF"
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Third: {
    screen: Transfer,
    navigationOptions: ({ navigation }) => ({
      title: "Transfer",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FFFFFF"
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fourth: {
    screen: Services,
    navigationOptions: ({ navigation }) => ({
      title: "Services",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FFFFFF"
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen4 will be indexed here
  Fifth: {
    screen: Top,
    navigationOptions: ({ navigation }) => ({
      title: "Top Up",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FFFFFF"
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen4 will be indexed here
  Sixth: {
    screen: Logout,
    navigationOptions: ({ navigation }) => ({
      title: "Logout",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FFFFFF"
      },
      headerTintColor: "#fff"
    })
  }
});
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Dashboard: {
    //Title
    screen: Screen_StackNavigator,
    navigationOptions: {
      drawerLabel: "Dashboard"
    }
  },
  Swipe: {
    //Title
    screen: Screen1_StackNavigator,
    navigationOptions: {
      drawerLabel: "Swipe To Pay"
    }
  },
  Transfer: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: "Transfer"
    }
  },
  Services: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: "Services"
    }
  },
  Top: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: "Top Up"
    }
  },
  Logout: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: "Logout"
    }
  }
});

const acc = StyleSheet.create({
loadingScreen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
});

export default createAppContainer(DrawerNavigatorExample);
