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
    textAlign: "center",
    position: "relative",
    top: 50
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    flexDirection: "column"
  },
  drawerImage: {
    width: "15%",
    height: "15%",
    marginLeft: 20,
    position: "relative",
    top: 50
  },
  container: {
    flexDirection: "row"
  },
  firstContainer: {
    paddingTop: 150,
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-evenly"
  },
  secondContainer: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-evenly"
  }
});

export default styles;
