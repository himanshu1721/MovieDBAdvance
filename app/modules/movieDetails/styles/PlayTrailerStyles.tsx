import { StyleSheet } from "react-native";
import { Colors, moderateScale, scale, verticalScale } from "../../../themes";

const styles = StyleSheet.create({
  iconStyles: { width: scale(20), height: verticalScale(20) },
  playTrailerTextStyles: {
    color: Colors.white,
    fontSize: moderateScale(20),
    fontWeight: "500",
  },
  container: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
