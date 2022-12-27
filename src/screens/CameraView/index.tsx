import React, { useEffect, useState, useRef } from "react";
import { Camera } from "expo-camera";
import { Alert, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import * as ScreenOrientation from "expo-screen-orientation";

import {
  Container,
  Header,
  BackButton,
  BackIcon,
  OptionsContainer,
  FlashCamera,
  FlashIcon,
  TakePictureContainer,
  ButtonContainer,
  TakePictureButton,
  FlipCamera,
  FlipIcon,
  styles,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Asset } from "../../screens/Requests";
import { useOrientation } from "../../hooks/orientation";

export function CameraView() {
  const [disabled, setDisabled] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isFlashActive, setIsFlashActive] = useState(
    Camera.Constants.FlashMode.off
  );
  const pressed = useSharedValue(false);
  const cameraPosition = useSharedValue(0);
  const camRef = useRef<Camera>({} as Camera);
  const orientation = useOrientation();
  const navigation = useNavigation();

  const takePictureStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(pressed.value ? 0.9 : 1) }],
      borderWidth: withSpring(pressed.value ? 5 : 3),
    };
  });
  const cameraTypeStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: interpolate(cameraPosition.value, [0, 1], [0, 180]) + "deg",
        },
      ],
    };
  });

  const onSuccess = (data: Asset) => {
    navigation.navigate("Requests", { data: [data] });
  };
  const handleBack = () => {
    navigation.goBack();
  };
  const handleCameraType = () => {
    cameraPosition.value = withTiming(cameraPosition.value == 1 ? 0 : 1, {
      duration: 800,
    });
    if (type === Camera.Constants.Type.back)
      return setType(Camera.Constants.Type.front);
    setType(Camera.Constants.Type.back);
  };

  const handleCameraFlash = () => {
    if (isFlashActive === Camera.Constants.FlashMode.off)
      return setIsFlashActive(Camera.Constants.FlashMode.on);
    setIsFlashActive(Camera.Constants.FlashMode.off);
  };

  const takePicture = async () => {
    setDisabled(true);
    pressed.value = false;
    if (camRef) {
      try {
        const data = await camRef.current.takePictureAsync();
        const filename = data.uri.split("/").pop();
        if (!filename) return;
        const [id] = filename.split(".");
        const newPicture = {
          id,
          filename,
          uri: data.uri,
          localUri: data.uri,
          height: data.height,
          width: data.width,
        };
        onSuccess(newPicture);
      } catch (error) {
        setDisabled(false);
        return Alert.alert("Camera is not available");
      }
    }
  };

  useEffect(() => {
    async function orientation() {
      await ScreenOrientation.unlockAsync();
    }
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    orientation();

    return function cleanup() {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
  }, []);

  if (hasPermission === false) {
    return (
      <Container orientation={orientation}>
        <Text>No access to camera</Text>
      </Container>
    );
  }
  return (
    <Container orientation={orientation}>
      <Header orientation={orientation}>
        <BackButton onPress={handleBack}>
          <BackIcon
            name={orientation === "PORTRAIT" ? "chevron-back" : "chevron-down"}
          />
        </BackButton>
      </Header>
      <Animated.View
        style={[
          {
            width: orientation === "PORTRAIT" ? "100%" : "70%",
            height: orientation === "PORTRAIT" ? "70%" : "100%",
          },
        ]}
      >
        <Camera
          type={type}
          style={{ flex: 1 }}
          ref={camRef}
          autoFocus="on"
          flashMode={isFlashActive}
        />
      </Animated.View>

      <OptionsContainer orientation={orientation}>
        <FlashCamera onPress={handleCameraFlash}>
          <FlashIcon
            name={isFlashActive ? "flash-outline" : "ios-flash-off-outline"}
          />
        </FlashCamera>
        <Animated.View style={[takePictureStyles, styles.button]}>
          <ButtonContainer>
            <TakePictureButton
              disabled={disabled}
              onPressIn={() => {
                pressed.value = true;
              }}
              onPressOut={takePicture}
            />
          </ButtonContainer>
        </Animated.View>
        <Animated.View style={[cameraTypeStyles]}>
          <FlipCamera onPress={handleCameraType}>
            <FlipIcon name="ios-sync-outline" />
          </FlipCamera>
        </Animated.View>
      </OptionsContainer>
    </Container>
  );
}
