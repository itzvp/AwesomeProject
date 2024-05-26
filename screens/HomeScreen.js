import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from "react-native";
import VideoItem from "../components/VideoItem";
import styles from "../assets/styles";
import { createLanguageService } from "typescript";

const HomeScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
    console.log("Hi Vishal Pnadey");
  }, [page, searchQuery]);

  const fetchVideos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://impactmindz.in/client/boub/back_end/api/product?page=${page}&search=${searchQuery}`
      );
      const data = await response.json();
      console.log("API Response:", data);
      setVideos((prevVideos) => (page === 1 ? data : [...prevVideos, ...data]));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError("Failed to load videos. Please try again.");
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {isLoading && page === 1 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={videos}
          renderItem={({ item }) => (
            <VideoItem video={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoading && page > 1 ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default HomeScreen;
