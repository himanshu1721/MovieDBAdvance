import { StyleSheet } from "react-native";
import { Colors, moderateScale, scale } from "../../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleAndYearSeparator: { width: scale(5) },
  titleYearStyle: {
    color: Colors.gray,
    fontSize: moderateScale(17),
    fontWeight: "400",
  },
  titleTextStyle: {
    color: Colors.white,
    fontSize: moderateScale(22),
    fontWeight: "400",
  },
});

export default styles;
