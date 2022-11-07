import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { addHours, format } from "date-fns";
import Toast from "react-native-root-toast";
import { RFValue } from "react-native-responsive-fontsize";

import { api } from "../services/api";
import { useTheme } from "styled-components";
import { Colaborador } from "../dtos/ColaboradorDTO";
import mime from "mime";

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  setor: string;
}

interface OwnRankingProps {
  pos: number;
  pontuacao_do_mes: number;
}

interface AuthContextData {
  isLoadingData: boolean;
  colaborador: Colaborador;
  firstMonth: Date;
  ranking: OwnRankingProps;
  updateColaborador: (
    avatar: string,
    nome: string,
    setor: string
  ) => Promise<void>;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [data, setData] = useState<Colaborador>({} as Colaborador);
  const [ranking, setRanking] = useState<OwnRankingProps>(
    {} as OwnRankingProps
  );
  const theme = useTheme();
  const firstMonth = new Date(2021, 7, 10);
  const colaboradorStorageKey = "@superarparainovar:colaboradores";

  const updateColaborador = async (
    avatar: string,
    nome: string,
    setor: string
  ) => {
    try {
      const updatedData = {
        nome,
        setor,
      };

      const updatedResponse = await api.put("/colaborador", updatedData);

      if (avatar === data.data.avatar) {
        return setData((prevState) => ({
          ...prevState,
          data: {
            ...prevState.data,
            nome: updatedResponse.data.nome,
            setor: updatedResponse.data.setor,
          },
        }));
      }

      const newAvatarToUpload = new FormData();

      const filename = avatar
        .split("\\")
        .pop()
        ?.split("/")
        .pop()
        ?.split(".")[0];

      newAvatarToUpload.append(
        "image",
        JSON.parse(
          JSON.stringify({
            uri: avatar,
            type: mime.getType(avatar),
            name: filename,
          })
        )
      );

      const response = await api.patch(
        "/colaborador/avatar",
        newAvatarToUpload
      );

      setData((prevState) => ({
        ...prevState,
        data: {
          ...prevState.data,
          nome: updatedResponse.data.nome,
          setor: updatedResponse.data.setor,
          avatar: response.data.avatar,
        },
      }));
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      const newColaborador: Colaborador = {
        data: data.data,
        access_token: data.access_token,
      };

      api.defaults.headers.authorization = `Bearer ${newColaborador.access_token}`;
      await AsyncStorage.setItem(
        colaboradorStorageKey,
        JSON.stringify(newColaborador)
      ).then(() => {
        setData(newColaborador);
        fetchOwnRanking();
      });
    } catch (error: any) {
      console.log(error.response.data);
      throw new Error(error);
    }
  };

  const signUp = async ({
    name,
    email,
    password,
    setor,
  }: SignUpCredentials) => {
    try {
      const response = await api.post("/colaboradores", {
        nome: name,
        email,
        password,
        setor,
      });
      Toast.show("Criado com sucesso❕", {
        position: Toast.positions.BOTTOM,
        backgroundColor: theme.colors.toast_success,
        textStyle: {
          fontSize: RFValue(15),
        },
        containerStyle: {
          borderRadius: RFValue(30),
          paddingVertical: RFValue(15),
          paddingHorizontal: RFValue(25),
        },
      });
    } catch (error: any) {
      Toast.show(`${error.response.data.error}`, {
        position: Toast.positions.BOTTOM,
        backgroundColor: theme.colors.toast_error,
        textStyle: {
          fontSize: RFValue(15),
        },
        containerStyle: {
          borderRadius: RFValue(30),
          paddingVertical: RFValue(15),
          paddingHorizontal: RFValue(25),
        },
      });
      throw new Error();
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem(colaboradorStorageKey).then(() => {
        setData({} as Colaborador);
        setRanking({} as OwnRankingProps);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const fetchOwnRanking = async () => {
    const currentMonth = format(new Date(), "M");

    try {
      const { data } = await api.get(
        `/colaborador/ranking?redirect_month=${currentMonth}`
      );
      const newRanking: OwnRankingProps = {
        pos: data.pos,
        pontuacao_do_mes: data.pontuacao_do_mes,
      };

      setRanking(newRanking);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    async function loadStorageData() {
      const data = await AsyncStorage.getItem(colaboradorStorageKey);
      if (!data) return;
      const colaborador: Colaborador = JSON.parse(data);
      if (Object.keys(colaborador).length === 0) return;
      try {
        const decoded: JwtPayload = jwt_decode(colaborador.access_token);
        let currentDate = addHours(new Date(), 1);

        // JWT exp is in seconds
        if (Number(decoded.exp) * 1000 < currentDate.getTime()) {
          setData({} as Colaborador);
          await signOut();
          return;
        } else {
          api.defaults.headers.authorization = `Bearer ${colaborador.access_token}`;
          setData(colaborador);
          fetchOwnRanking();
          setIsLoadingData(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadStorageData();
  }, []);

  useEffect(() => {
    async function updatedData() {
      const newColaborador: Colaborador = {
        data: data.data,
        access_token: data.access_token,
      };

      api.defaults.headers.authorization = `Bearer ${newColaborador.access_token}`;
      await AsyncStorage.setItem(
        colaboradorStorageKey,
        JSON.stringify(newColaborador)
      );
    }
    updatedData();
  }, [data]);
  return (
    <AuthContext.Provider
      value={{
        isLoadingData,
        colaborador: data,
        firstMonth: firstMonth,
        ranking,
        updateColaborador,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
