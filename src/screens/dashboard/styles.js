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
    marginTop: 30,
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
  },
  walletImage: {
    marginBottom: 50,
    marginTop: 50
  },
  card: {
    borderRadius: 10
  },
  swiftpayWallet: {
    backgroundColor: "#D99147",
    borderRadius: 30,
    marginTop: 30,
    height: 180
  },
  andyText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  walletText: {
    margin: 10,
    color: "#FFFFFF",
    fontWeight: "900"
  },
  balanceText: {
    marginTop: 40,
    marginLeft: 150,
    color: "#D3D3D3",
    fontWeight: "900"
  },
  moneyText: {
    marginLeft: 170,
    color: "#FFFFFF",
    fontWeight: "900"
  }
});
export default styles;
