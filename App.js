import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/login";
import Logout from "./src/screens/logout";
import SignupScreen from "./src/screens/signup";
import TransferScreen from "./src/screens/transfer";
import DashboardScreen from "./src/screens/dashboard";
import mtnMomoScreen from "./src/screens/mtnMomo";
import vodafoneCashScreen from "./src/screens/vodafoneCash";
import HomeScreen from "./src/screens/welcome";
import topUpScreen from "./src/screens/topUp";
import airtelTigoMoneyScreen from "./src/screens/airteltigoMoney";

console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Logout: Logout,
    Signup: SignupScreen,
    Dashboard: DashboardScreen,
    Transfer: TransferScreen,
    mtnMomo: mtnMomoScreen,
    vodafoneCash: vodafoneCashScreen,
    airtelTigoMoney: airtelTigoMoneyScreen,
    topUp: topUpScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
