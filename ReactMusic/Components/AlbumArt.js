import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const AlbumArt = ({ url, onPress }) => (
  <View style={styles.album_container}>
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.album_image} source={{ uri: url }} />
    </TouchableOpacity>
  </View>
);

export default AlbumArt;
