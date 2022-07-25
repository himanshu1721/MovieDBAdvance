import { StyleSheet } from "react-native";
import { Colors, moderateScale, scale } from "../../../themes";

const styles = StyleSheet.create({
  userScoreTextStyles: {
    color: Colors.white,
    fontWeight: "500",
    fontSize: moderateScale(20),
  },
  itemSeparator: { width: scale(7) },
  container: { flex: 6, flexDirection: "row", alignItems: "center" },
});

export default styles;
