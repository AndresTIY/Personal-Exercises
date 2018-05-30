import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const PlayBackControls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled
}) => (
  <View style={styles.controls_container}>
    <TouchableOpacity activeOpacity={0} onPress={onPressShuffle}>
      <Image
        style={[
          styles.controls_secondaryControl,
          shuffleOn ? [] : styles.controls_off
        ]}
        source={require("../img/shuffle.png")}
      />
    </TouchableOpacity>
    <View style={{ width: 40 }} />
    {!paused ? (
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.controls_playButton}>
          <Image source={require("../img/pause.png")} />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.controls_playButton}>
          <Image source={require("../img/play.png")} />
        </View>
      </TouchableOpacity>
    )}
    <View style={{ width: 20 }} />
    <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
      <Image
        style={[forwardDisabled && { opacity: 0.3 }]}
        source={require("../img/next.png")}
      />
    </TouchableOpacity>
    <View style={{ width: 40 }} />
    <TouchableOpacity onPress={onPressRepeat}>
      <Image
        style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
        source={require("../img/repeat.png")}
      />
    </TouchableOpacity>
  </View>
);

export default PlayBackControls;
