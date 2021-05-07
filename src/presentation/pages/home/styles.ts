import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../styles";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundMainColor,
  },

  text: {
    color: Theme.contrastTextColor,
  },

  imageCover: {
    resizeMode: "cover",
    justifyContent: "flex-end",
    width,
    height: width,

    alignItems: "flex-start",
    marginBottom: -40,
  },

  track_info: {
    padding: 40,
    marginBottom: 40,
  },

  track_info_badge: {
    fontSize: 14,
  },
  track_info_music: {
    fontSize: 28,
    fontFamily: "Poppins_Medium",
  },

  more_content: {
    backgroundColor: Theme.backgroundMainColor,
    flex: 1,
    borderTopRightRadius: 40,
    padding: 16,
    position: "relative",
    paddingTop: 40,
  },

  play_button: {
    width: 60,
    height: 60,
    alignItems: "stretch",
    borderRadius: 30,
    position: "absolute",
    right: 40,
    top: -30,
    zIndex: 999,
  },

  background_play_button: {
    flex: 1,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 6,
  },

  socials_info: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  social_data: {
    alignItems: "center",
  },

  social_label: {
    color: Theme.lowContrastTextColor,
    fontSize: 16,
  },

  social_text: {
    color: Theme.lowContrastTextColor,
    fontSize: 24,
  },

  popular_content: {
    paddingVertical: 16,
  },

  flatlist_style: {
    marginTop: 8,
  },

  flatlist_content_style: {},

  flatlist_item_style: {
    marginRight: 16,
    justifyContent: "flex-start",
    alignItems: "stretch",
    position: "relative",
    width: 84,
  },

  fl_cover_style: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: Theme.lightBackground,
    borderRadius: 8,
    marginBottom: 8,
  },

  popular_item_play: {
    position: "absolute",
    borderRadius: 20,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.lowContrastTextColor,
    top: 78,
    right: 8,
  },

  albums_flat_list: {
    height: 270,
  },

  albums_flat_list_container: {},

  algums_item: {
    flexDirection: "row",
    marginBottom: 16,
  },

  album_image: {
    borderRadius: 8,
    marginRight: 8,
    width: 80,
    height: 80,
  },

  album_middle_content: {
    flex: 1,
  },

  album_more_button: {
    padding: 16,
  },
});
