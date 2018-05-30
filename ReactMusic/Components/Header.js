import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const Header = ({ message, onDownPress, onQueuePress, onMessagePress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Image style={styles.button} source={require("../img/arrow_down.png")} />
    </TouchableOpacity>
    <Text style={styles.message} onPress={onMessagePress}>
      {message.toUpperCase()}
    </Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Image style={styles.button} source={require("../img/queue_music.png")} />
    </TouchableOpacity>
  </View>
);

export default Header;
