import styled from 'styled-components/native';

interface StandardLayoutContainerProps {
  color: string;
}

//<StandardLayoutContainerProps>
//  background-color: ${props => props.color};
export const StandardLayoutContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  position: absolute;
  flex: 1;
  background-color: ${props => props.color};
`;