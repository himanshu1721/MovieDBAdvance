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
    fontSize: moderateScale(19),
    fontWeight: "500",
  },
  titleTextStyle: {
    color: Colors.white,
    fontSize: moderateScale(23),
    fontWeight: "600",
  },
});

export default styles;
