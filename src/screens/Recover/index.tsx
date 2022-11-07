import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Toast from "react-native-root-toast";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

import {
  Container,
  Form,
  FormTitle,
  FormInput,
  SubmitResponse,
  BackButton,
  Icon,
} from "./styles";

export function Recover() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  const navigation = useNavigation();

  const handleOnChangeEmail = (value: string) => {
    setEmail(value);
    setResponse("");
  };

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  const handleRecover = async () => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required("*Email obrigatório")
        .email("*Insira um e-mail válido")
        .matches(/^.+@integradora\.com\.br$/i, "*Email inválido"),
    });

    try {
      const data = { email };
      await schema.validate(data);

      setLoading(true);
      const response = await api.post("/colaborador/password", data);

      const message = response.data;

      Toast.show(message, {
        position: Toast.positions.BOTTOM,
        backgroundColor: theme.colors.toast_success,
        textStyle: {
          fontSize: RFValue(15),
        },
        containerStyle: {
          borderRadius: RFValue(30),
          paddingVertical: RFValue(15),
          paddingHorizontal: RFValue(25),
          marginBottom: 200,
        },
      });

      setResponse("");
      setEmail("");
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        setResponse(error.message);
      } else {
        setResponse("*Não foi possível enviar um email, verifique o email");
      }
    } finally {
      setLoading(false);
    }
  };

  const theme = useTheme();
  return (
    <Background>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <>
          <Container>
            <Form>
              <FormTitle>Digite seu email para recuperar a senha</FormTitle>
              <FormInput
                value={email}
                maxLength={100}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="exemplo@integradora.com.br"
                placeholderTextColor={theme.colors.shape_light_opacity100}
                onChangeText={(value) => handleOnChangeEmail(value)}
              />
              <SubmitResponse>{response}</SubmitResponse>
              <Button
                title="Enviar"
                onPress={handleRecover}
                enabled={!loading}
              />
            </Form>
          </Container>
          <BackButton onPress={handleNavigationBack}>
            <Icon name="arrow-back-outline" />
          </BackButton>
        </>
      </TouchableWithoutFeedback>
    </Background>
  );
}
