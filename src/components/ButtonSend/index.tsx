import React, { useState } from "react";
import {
  PanGestureHandler,
  RectButtonProps,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";

import { ModalViewSend } from "../ModalViewSend";
import { ButtonContainer, Button, Icon } from "./styles";

type Props = RectButtonProps;

export function ButtonSend({ ...rest }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const buttonSendStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  function handleOpenModal() {
    setIsVisible(true);
  }
  function closeModal() {
    setIsVisible(false);
  }
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[buttonSendStyle]}>
        <ButtonContainer>
          <Button onPress={handleOpenModal}>
            <Icon name="plus" />
          </Button>
        </ButtonContainer>
        <ModalViewSend visible={isVisible} closeModal={closeModal} />
      </Animated.View>
    </PanGestureHandler>
  );
}
