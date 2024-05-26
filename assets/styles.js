import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  videoItem: {
    flexDirection: "row",
    marginBottom: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  videoInfo: {
    marginLeft: 10,
    justifyContent: "center",
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  videoDescription: {
    fontSize: 14,
    color: "gray",
  },
  videoPlayer: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "gray",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default styles;
