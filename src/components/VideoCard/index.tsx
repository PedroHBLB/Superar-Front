import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Video from "react-native-video";

export function VideoCard() {
  const [player, setPlayer] = useState();
  const [status, setStatus] = React.useState({});
  return (
    <Video
      source={{
        uri: "https://drive.google.com/file/d/104LLdMYyyT6QMQpWXPtZwSe2wfRzkLcb/view?usp=sharing",
      }} // Can be a URL or a local file.
      //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
      //  onError={this.videoError}               // Callback when video cannot be loaded
      style={styles.backgroundVideo}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  backgroundVideo: {
    backgroundColor: "#ecf0f1",
    width: 320,
    height: 200,
  },
});
