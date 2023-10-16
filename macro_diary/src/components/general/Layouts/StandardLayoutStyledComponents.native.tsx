import styled from "styled-components/native";

interface StandardLayoutContainerProps {
  backgroundColor: string;
}

//<StandardLayoutContainerProps>
//  background-color: ${props => props.backgroundColor};
export const StandardLayoutContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  position: absolute;
  flex: 1;
`;