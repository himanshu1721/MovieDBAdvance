import { StyleSheet } from "react-native";
import { Colors, moderateScale, verticalScale } from "../../../themes";

const styles = StyleSheet.create({
  descriptionStyle: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    color: Colors.white,
  },
  itemSeparator: { height: verticalScale(20) },
  titleStyles: {
    fontSize: moderateScale(25),
    fontWeight: "800",
    color: Colors.white,
  },
  container: { padding: moderateScale(10) },
});

export default styles;
