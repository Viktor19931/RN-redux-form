import styled from "styled-components/native";

export const ButtonWrapper = styled.View`
  padding-vertical: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
  background-color: ${props => props.bg}
  opacity: ${props => props.disabled ? 0.5 : 1}
`;

export const ButtonText = styled.Text`
  color: white;
`;
