import styled from "styled-components/native";

interface StandardLayoutContainerProps {
  backgroundColor: string;
}

export const StandardLayoutContainer = styled.SafeAreaView<StandardLayoutContainerProps>`
  background-color: ${props => props.backgroundColor};
  width: 100%;
  height: 100%;
  align-items: center;
`;