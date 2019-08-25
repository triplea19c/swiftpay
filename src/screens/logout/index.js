import React, { Component } from "react";
import LoginScreen from "../login";
import {AsyncStorage} from "react-native";

class Logout extends Component {
    constructor(props) {
        super(props);
     }

    componentWillMount() {
        AsyncStorage.clear();
        this.props.navigation.navigate('LoginScreen')
    }
}

export default Logout;
