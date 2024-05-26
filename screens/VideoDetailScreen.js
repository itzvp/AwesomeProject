import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import styles from "../assets/styles";

const VideoDetailScreen = ({ route }) => {
  const { video } = route.params;

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: video.videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        useNativeControls
        style={styles.videoPlayer}
      />
      <Text style={styles.title}>{video.title}</Text>
      <Text style={styles.description}>{video.description}</Text>
    </View>
  );
};

export default VideoDetailScreen;
