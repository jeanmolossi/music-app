import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../styles";

const { width: totalWitdth, height } = Dimensions.get("screen");

const width = totalWitdth - 48;

const addornSize = width * 0.95;

export default StyleSheet.create({
  container: {
    backgroundColor: Theme.backgroundMainColor,
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    paddingTop: 0,
    position: "relative",
    height,
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
  },

  cover_image: {
    width,
    height: width,
    borderRadius: 32,
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
    height: 5,
    backgroundColor: Theme.backgroundDarkColor,
    flexDirection: "row",
  },

  bar: {
    width: "30%",
    height: 5,
    backgroundColor: Theme.secondColor,
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
