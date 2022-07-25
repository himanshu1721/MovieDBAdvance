import { StyleSheet } from "react-native";
import { Colors, verticalScale, moderateScale } from "../../../themes";

const styles = StyleSheet.create({
  subContainer: { flex: 1, justifyContent: "center" },
  itemSeparator: {
    height: verticalScale(9),
  },
  userScoreAndPlayContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
  },
  componentSeparator: {
    width: moderateScale(1.3),
    opacity: 0.47,
    height: verticalScale(25),
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

export default styles;
