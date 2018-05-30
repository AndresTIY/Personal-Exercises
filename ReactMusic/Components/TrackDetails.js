import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const TrackDetails = ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress
}) => (
  <View style={styles.track_container}>
    <TouchableOpacity onPress={onAddPress}>
      <Image
        style={styles.track_button}
        source={require("../img/add_circle.png")}
      />
    </TouchableOpacity>
    <View style={styles.track_detailsWrapper}>
      <Text style={styles.track_title} onPress={onTitlePress}>
        {title}
      </Text>
      <Text style={styles.track_artist} onPress={onArtistPress}>
        {artist}
      </Text>
    </View>
    <TouchableOpacity onPress={onMorePress}>
      <View styles={styles.track_moreButton}>
        <Image
          style={styles.track_moreButtonIcon}
          source={require("../img/more_horiz.png")}
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default TrackDetails;
