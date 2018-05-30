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
  }
};

export default styles;
