import styled from "styled-components/native";

interface Props {
  active?: boolean;
}

export const ImageIndex = styled.View<Props>`
  width: 10px;
  height: 10px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.primary_light};
  margin-left: 8px;
  border-radius: 8px;
`;
