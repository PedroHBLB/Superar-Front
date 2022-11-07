import React, { useState } from "react";
import { Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { InputForm } from "../../components/Forms/InputForm";

import GreenPng from "../../assets/signInDecoration2.png";
import OrangePng from "../../assets/signInDecoration.png";
import SuperarSvg from "../../assets/superar-para-inovar.svg";

import {
  Container,
  BackgroundImagesContainer,
  BackgroundImage,
  Header,
  HeaderWrapper,
  Title,
  Divider,
  Subtitle,
  Content,
  ButtonContainer,
  RecoverPassword,
  RecoverText,
  Footer,
  Link,
} from "./styles";

type FormData = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().required("*Email obrigatório"),
  password: Yup.string().required("*Senha obrigatória"),
});

export function SignIn() {
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (form: FormData) => {
    try {
      setLoading(true);
      const newLoginColaborador = {
        email: form.email,
        password: form.password,
      };

      await signIn(newLoginColaborador);
    } catch (error: any) {
      setLoading(false);
      return Alert.alert("Opa", "Usuário/Senha inválida");
    }
  };

  const handleNavigationToNewSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleNavigationToRecover = () => {
    navigation.navigate("Recover");
  };

  return (
    <Background>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={20}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <BackgroundImagesContainer>
            <BackgroundImage source={OrangePng} />
            <BackgroundImage source={GreenPng} />
          </BackgroundImagesContainer>
          <Header>
            <SuperarSvg width={211} height={139} />
            <HeaderWrapper>
              <Title>Entre com sua conta</Title>
              <Divider />
              <Subtitle>
                E acompanhe tudo{"\n"}
                sobre o Superar Para Inovar
              </Subtitle>
            </HeaderWrapper>
          </Header>
          <Content>
            <InputForm
              name="email"
              control={control}
              error={errors.email && errors.email.message}
              label="Email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <InputForm
              name="password"
              control={control}
              error={errors.password && errors.password.message}
              label="Senha"
              placeholder="Senha"
              secureTextEntry={!isPasswordVisible}
              right={
                <TextInput.Icon
                  forceTextInputFocus={false}
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              }
            />
            <RecoverPassword>
              <RecoverText onPress={handleNavigationToRecover}>
                Esqueceu sua senha?
              </RecoverText>
            </RecoverPassword>
          </Content>
          <ButtonContainer>
            <Button
              enabled={!loading}
              title="acessar conta"
              onPress={handleSubmit(handleSignIn)}
            />
            <Footer>
              Não tem cadastro?{"  "}
              <Link onPress={handleNavigationToNewSignUp}>Crie sua conta</Link>
            </Footer>
          </ButtonContainer>
        </Container>
      </KeyboardAwareScrollView>
    </Background>
  );
}
