import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "@/presentation/styles";

const { width: totalWitdth } = Dimensions.get("screen");
const { height: windowHeight } = Dimensions.get("window");

const width = totalWitdth - 48;

const addornSize = width * 0.95;

export default StyleSheet.create({
  container: {
    backgroundColor: Theme.backgroundMainColor,
    paddingVertical: 32,
    paddingTop: 0,
    position: "relative",
    height: windowHeight,
  },

  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    flex: 1,
  },

  addorn: {
    position: "absolute",
    width: addornSize,
    height: addornSize,
    top: 0,
    left: 0,
    backgroundColor: Theme.secondColor,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 32,
  },

  cover: {
    margin: 8,
    elevation: 8,
    borderRadius: 32,
    flex: 1,
  },

  cover_image: {
    maxWidth: width,
    maxHeight: width,
    flex: 1,
    borderRadius: 32,

    resizeMode: "cover",
  },

  player_infos: {
    marginTop: 8,
    paddingHorizontal: 16,
  },

  infos_header: {
    flexDirection: "row",
  },

  playing_track_info: {
    flex: 1,
  },

  like_button: {
    paddingVertical: 16,
  },

  progress_bar: {
    marginTop: 16,
    width: "100%",
  },

  progress_bar_bullet: {
    backgroundColor: Theme.backgroundDarkColor,
    flexDirection: "row",
  },

  bar: {
    width: "100%",
    backgroundColor: Theme.backgroundMainColor,
  },

  bullet: {
    width: 16,
    height: 16,
    backgroundColor: Theme.backgroundDarkColor,
    borderWidth: 3,
    borderColor: Theme.secondColor,
    borderRadius: 8,
    marginTop: -5,
  },

  timers: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  player_controls: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tertiary_btns: {},

  secondary_btns: {},

  main_button: {
    backgroundColor: Theme.secondColor,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 70 / 2,
  },
});
