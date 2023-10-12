import styled from "styled-components/native";


export const DaysOfWeekContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

interface DaysOfWeekItemProps {
  backgroundColor: string;
}

export const DaysOfWeekItem = styled.Pressable<DaysOfWeekItemProps>`
  height: 40px;
  width: 40px;
  background-color: ${props => props.backgroundColor};
  border-radius: 25px; 
  justify-content: center;
`;