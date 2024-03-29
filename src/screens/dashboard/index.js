import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import imageBackground from '../../../assets/images/Polygon.png'
import Services from '../services'
import Swipe from '../swipe'
import Top from '../top'
import Transfer from '../transfer'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import styles from './styles'

class NavigationDrawerStructure extends Component {
  //Structure for the navigating Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/* Donute Button Image */}
          <Image
            source={require('../../../assets/images/drawer.png')}
            style={{ width: 35, height: 35, marginLeft: 15, marginBottom: 20}}
          />
        </TouchableOpacity>
        <ImageBackground source={imageBackground}
           style={styles.topImageBackground}>
        </ImageBackground>
      </View>
    );
  }
}

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Dashboard </Text>
      </View>
    )
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Screen will be indexed here
  First: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen1_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Swipe,
    navigationOptions: ({ navigation }) => ({
      title: 'Swipe To Pay',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Transfer,
    navigationOptions: ({ navigation }) => ({
      title: 'Transfer',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Services,
    navigationOptions: ({ navigation }) => ({
      title: 'Services',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen4 will be indexed here
  Third: {
    screen: Top,
    navigationOptions: ({ navigation }) => ({
      title: 'Top Up',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Dashboard: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Dashboard',
    },
  },
  Swipe: {
    //Title
    screen: Screen1_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Swipe To Pay',
    },
  },
  Transfer: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Transfer',
    },
  },
  Services: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Services',
    },
  },
  Top: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Top Up',
    },
  }
});

export default createAppContainer(DrawerNavigatorExample)