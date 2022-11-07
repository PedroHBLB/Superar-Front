import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { useTheme } from "styled-components";
import Swiper from "react-native-swiper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";

import { useAuth } from "../../hooks/auth";

import { Container, ImageNumber, Number, styles } from "./styles";
import { Photo } from "../../dtos/PhotoDTO";

type Props = {
  photos: {
    id: string;
    uri: string;
  }[];
};

export function ImagesSlider({ photos }: Props) {
  const visible = useSharedValue(0.7);
  const [imageIndex, setImageIndex] = useState(1);
  const theme = useTheme();

  const { colaborador } = useAuth();

  const preview = {
    uri: theme.preview,
  };
  const myHeaders = {
    Authorization: `Bearer ${colaborador.access_token}`,
  };

  const numbersStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(visible.value, [1, 0], [1, 0]),
    };
  });

  useEffect(() => {
    setTimeout(() => {
      visible.value = withTiming(0, { duration: 500 });
    }, 5000);
  }, []);

  return (
    <Container>
      <Swiper
        loop={false}
        activeDotColor={theme.colors.primary}
        loadMinimal={true}
        onIndexChanged={(index) =>
          setTimeout(() => {
            setImageIndex(index + 1);
          }, 0)
        }
      >
        {photos.map((photo: Photo) => (
          <View key={photo.id} onStartShouldSetResponder={() => true}>
            <Image
              style={styles.image}
              uri={photo.uri}
              preview={preview}
              //options={{ headers: myHeaders }}
              transitionDuration={700}
            />
          </View>
        ))}
      </Swiper>
      {photos.length > 1 && (
        <Animated.View style={[styles.numbers, numbersStyle]}>
          <Number>
            {imageIndex}/{photos.length}
          </Number>
        </Animated.View>
      )}
    </Container>
  );
}
