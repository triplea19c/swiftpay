import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  drawerImage: {
    width: "200%",
    height: "100%",
    marginLeft: 15,
    marginBottom: 20
  },
  topImageBackground: {
    width: "100%",
    height: "100%"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  outerContainer: {
    flexDirection: "row",
    flex: 4,
    justifyContent: "space-evenly"
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  innerMtnContainer: {
    position: "relative",
    right: 140,
    bottom: 100
  },
  text: {
    color: "red"
  },
  favorites: {
    color: "red",
    flex: 4,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    position: "relative",
    bottom: 10
  }
});
export default styles;
