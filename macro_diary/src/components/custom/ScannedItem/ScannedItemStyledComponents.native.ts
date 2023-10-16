import styled from 'styled-components';
import StyledText from '@components/general/Text/StyledText.native';

interface ScannedItemListTitleProps {
  textColor?: string;
}

export const ScannedItemListTitle = styled(StyledText)<ScannedItemListTitleProps>`
  padding: 10px;
  color: ${props => props.color };
`;