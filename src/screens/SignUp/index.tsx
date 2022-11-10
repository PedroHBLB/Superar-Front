import React, { useState } from "react";
import { Alert, Platform } from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { InputForm } from "../../components/Forms/InputForm";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
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
  ModalContainer,
  ModalButton,
  ChosenSetor,
  ChosenIcon,
  ButtonContainer,
  Footer,
  CkeckboxContainer,
  CheckboxIcon,
  CheckboxText,
  Error,
  Link,
  BackButton,
  Icon,
} from "./styles";
import { DropDown } from "../../components/DropDown";
import Toast from "react-native-root-toast";

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  checkbox: boolean;
};

const schema = Yup.object().shape({
  name: Yup.string().required("*Nome obrigatório"),
  email: Yup.string()
    .required("*Email obrigatório")
    .email("*Insira um e-mail válido")
    .matches(
      /^.+@integradora\.com\.br$/i,
      "*São válidos e-mails com o domínio @integradora.com.br"
    ),
  password: Yup.string()
    .required("*Senha obrigatória")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])/,
      "*No mínimo 1 letra minúscula e maiúscula"
    )
    .matches(/(?=.*[0-9])/, "*No mínimo 1 número")
    .min(8, "*No mínimo ${min} caracteres"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "*As senhas devem ser iguais"
  ),
  checkbox: Yup.boolean().oneOf([true], "*É necessário aceitar os termos"),
});

export function SignUp() {
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setor, setSetor] = useState("Setor");
  const theme = useTheme();
  const { signUp } = useAuth();

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitNewColaborador = async (form: FormData) => {
    setLoading(true);
    if (setor === "Setor") {
      return Alert.alert("Setor inválido", "Selecione um setor");
    }

    const [, domain] = form.email.split("@");
    if (domain !== "integradora.com.br") {
      return Alert.alert(
        "Domínio incorreto",
        "É permitido apenas emails do domínio @integradora.com.br"
      );
    }

    try {
      setLoading(true);
      const newColaborador = {
        name: form.name,
        email: form.email,
        password: form.password,
        setor,
      };

      await signUp(newColaborador);
      reset({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        checkbox: false,
      });
      setSetor("Setor");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleColaboradorSetor = (key: string) => {
    setSetor(key);
    handleModalClose();
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
            <SuperarSvg
              width={211}
              height={139}
              style={{ alignSelf: "center" }}
            />
            <HeaderWrapper>
              <Title>Crie sua conta</Title>
              <Divider />
              <Subtitle>
                E acompanhe tudo{"\n"}
                sobre o Superar Para Inovar
              </Subtitle>
            </HeaderWrapper>
          </Header>
          <Content>
            <InputForm
              name="name"
              control={control}
              error={errors.name && errors.name.message}
              autoCapitalize="words"
              label="Nome"
              placeholder="Nome"
            />
            <InputForm
              name="email"
              control={control}
              error={errors.email && errors.email.message}
              label="Email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <ModalContainer isActive={isModalOpen}>
              <ModalButton onPress={handleModalOpen}>
                <ChosenSetor>{setor}</ChosenSetor>
                <ChosenIcon name="caretdown" isActive={isModalOpen} />
              </ModalButton>
            </ModalContainer>
            <DropDown
              isVisible={isModalOpen}
              closeModal={handleModalClose}
              handleColaboradorOption={handleColaboradorSetor}
              keys={["ADM", "AT", "IC", "IT", "OT", "PMO", "SUL", "VENDAS"]}
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
            <InputForm
              name="passwordConfirmation"
              control={control}
              error={
                errors.passwordConfirmation &&
                errors.passwordConfirmation.message
              }
              label="Senha novamente"
              placeholder="Senha novamente"
              secureTextEntry={!isPasswordConfirmationVisible}
              right={
                <TextInput.Icon
                  forceTextInputFocus={false}
                  name={isPasswordConfirmationVisible ? "eye-off" : "eye"}
                  onPress={() =>
                    setIsPasswordConfirmationVisible(
                      !isPasswordConfirmationVisible
                    )
                  }
                />
              }
            />
            <ButtonContainer>
              <Footer>
                <Controller
                  name="checkbox"
                  control={control}
                  defaultValue={false}
                  render={({ field: { onChange, value } }) => (
                    <>
                      {Platform.OS !== "ios" ? (
                        <Checkbox
                          status={value ? "checked" : "unchecked"}
                          onPress={() => onChange(!value)}
                          uncheckedColor={theme.colors.shape}
                          color={theme.colors.primary}
                        />
                      ) : (
                        <CkeckboxContainer
                          toggleCheckBox={value}
                          onPress={() => onChange(!value)}
                        >
                          {value && <CheckboxIcon name="check" />}
                        </CkeckboxContainer>
                      )}
                      <CheckboxText>
                        Eu li e concordo com os <Link>termos de uso</Link>
                      </CheckboxText>
                    </>
                  )}
                />
              </Footer>
              {errors.checkbox && <Error>{errors.checkbox.message}</Error>}
              <Button
                enabled={!loading}
                title="criar conta"
                onPress={handleSubmit(handleSubmitNewColaborador)}
              />
            </ButtonContainer>
          </Content>
          <BackButton onPress={handleNavigationBack}>
            <Icon name="arrow-back-outline" />
          </BackButton>
        </Container>
      </KeyboardAwareScrollView>
    </Background>
  );
}
