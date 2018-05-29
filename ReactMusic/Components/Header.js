import { Image, TouchableOpacity, View, Text } from "react-native";

const Header = ({ message, onDownPress, onQueuePress, onMessagePress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Image style={styles.button} />
    </TouchableOpacity>
    <Text style={styles.message} onPress={onMessagePress}>
      {message.toUpperCase()}
    </Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Image style={styles.button} />
    </TouchableOpacity>
  </View>
);
