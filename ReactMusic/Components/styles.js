import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const imageSize = width - 48;

const styles = {
  header_container: {
    height: 72,
    paddingTop: 20,
    paddingHorizontal: 12,
    flexDirection: "row"
  },
  header_button: {
    opacity: 0.72
  },
  header_message: {
    flex: 1,
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.72)",
    fontWeight: "bold",
    fontSize: 10
  },
  track_container: {
    paddingTop: 24,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center"
  },
  track_detailsWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  track_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  track_artist: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 12,
    marginTop: 4
  },
  track_button: {
    opacity: 0.72
  },
  track_moreButton: {
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  track_moreButtonIcon: {
    height: 17,
    width: 17
  },
  album_container: {
    paddingHorizontal: 24
  },
  album_image: {
    width: imageSize,
    height: imageSize
  },
  slider_container: {
    paddingHorizontal: 16,
    paddingTop: 16
  },
  slider_slider: {
    marginTop: -12
  },
  slider_text: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 12,
    textAlign: "center"
  },
  slider_thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white"
  },
  slider_track: {
    height: 2,
    borderRadius: 1
  },
  controls_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8
  },
  controls_secondaryControl: {
    height: 18,
    width: 18
  },
  controls_playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 72 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  controls_off: {
    opacity: 0.3
  }
};

export default styles;
