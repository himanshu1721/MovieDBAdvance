import { StyleSheet } from "react-native";
import { Colors, moderateScale, scale } from "../../../themes";

const styles = StyleSheet.create({
  ratedTextStyles: {
    color: Colors.starDust,
    fontWeight: "600",
    fontSize: moderateScale(20),
  },
  dateStyles: {
    color: Colors.white,
    fontWeight: "500",
    fontSize: moderateScale(18),
  },
  subContainer: { flexDirection: "row", alignItems: "center" },
  ratedContainer: {
    alignItems: "center",
    borderRadius: moderateScale(3),
    width: scale(40),
    height: moderateScale(30),
    borderWidth: moderateScale(2),
    margin: moderateScale(5),
    borderColor: Colors.starDust,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
