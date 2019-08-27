import Toast from "react-native-toast-native";
import { Platform } from "react-native";
const style = {
  backgroundColor: "#4ADDFB",
  width: 300,
  height: Platform.OS === "ios" ? 50 : 100,
  color: "#ffffff",
  fontSize: 15,
  lineHeight: 2,
  lines: 4,
  borderRadius: 15,
  fontWeight: "bold",
  yOffset: 40
};
Toast.show(
  "Transaction is being processed, kindly accept approval from your mobile money to complete the transaction",
  Toast.SHORT,
  Toast.TOP,
  style
);
