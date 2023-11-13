import styled from 'styled-components/native';
import StyledText from '@components/general/Text/StyledText.native';

interface ScannedItemListTitleProps {
  textColor?: string;
}

export const ScannedItemListTitle = styled(StyledText)<ScannedItemListTitleProps>`
  padding: 10px;
  color: ${props => props.color };
`;

export const ScannedSearchContainer = styled.View`
  flex-direction: column;
  margin-left: 8px;
`;

export const ScannedItemContainer = styled.View`
  width: 350px;
  border-radius: 10px;
  margin-top: 32px;
  align-items: center;
`;