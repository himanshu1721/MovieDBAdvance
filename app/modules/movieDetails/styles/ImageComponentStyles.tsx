import { StyleSheet } from "react-native";
import { moderateScale, scale } from "../../../themes";

const styles = StyleSheet.create({
  posterImageStyles: {
    marginLeft: scale(18),
    width: moderateScale(105, 0.7),
    height: moderateScale(150, 0.7),
    borderRadius: moderateScale(5),
  },
  container: { justifyContent: "center", height: scale(200) },
  backdropImageStyles: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    opacity: 0.7,
  },
});

export default styles;
