import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "../assets/styles";

const VideoItem = ({ video, navigation }) => {
  const handlePress = () => {
    navigation.navigate("VideoDetail", { video });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.videoItem}>
      <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>{video.title}</Text>
        <Text style={styles.videoDescription}>{video.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoItem;
