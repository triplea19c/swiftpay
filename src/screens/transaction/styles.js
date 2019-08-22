import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sendText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 60,
    paddingRight: 60,
    flexWrap: "wrap",
    flex: 1,
    textAlign: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  drawerImage: {
    width: "15%",
    height: "15%",
    marginLeft: 20,
    position: "relative",
    top: 50
  },
  firstContainer: {
    paddingTop: 50,
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-evenly"
  },
  secondContainer: {
    paddingTop: 100,
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-evenly"
  }
});

export default styles;
