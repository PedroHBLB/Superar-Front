import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Post } from "../../dtos/PhotoDTO";
import { File } from "../../dtos/FileDTO";

export const Container = styled.View`
  flex: 1;
`;

export const Options = styled.View`
  width: 100%;
  height: ${RFValue(28)}px;
  flex-direction: row;

  margin-top: 20px;
`;

export const WithoutData = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WithoutDataCircle = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 3px solid ${({ theme }) => theme.colors.shape};
  border-radius: 100px;

  margin-bottom: 10px;
`;

export const WithoutPhotosIcon = styled(Ionicons)`
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const WithoutPhotosText = styled.Text`
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const WithoutDocumentsIcon = styled(Entypo)`
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const WithoutDocumentsText = styled.Text`
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const PhotosContainer = styled(
  FlatList as new () => FlatList<Post>
).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 3,
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DocumentsContainer = styled(
  FlatList as new () => FlatList<File>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 5,
    flexGrow: 1,
  },
})`
  width: 100%;
`;

export const DocumentsDivider = styled.View`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.primary};
`;
