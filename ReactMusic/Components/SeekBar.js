import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import Slider from "react-native-slider";
import styles from "./styles";

function pad(n, width, z = 0) {
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = position => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2)
];

const SeekBar = ({ trackLength, currentPosition, onSeek, onSlidingStart }) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <View style={styles.slider_container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.slider_text}>{elapsed[0] + ":" + elapsed[1]}</Text>
        <View style={{ flex: 1 }} />
        <Text style={[styles.slider_text, { width: 40 }]}>
          {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={styles.slider_slider}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="rgba(255, 255, 255, 0.14)"
        thumbStyle={styles.slider_thumb}
        trackStyle={styles.slider_track}
      />
    </View>
  );
};

export default SeekBar;
