import useGetTheme from "../../../styles/hooks/useGetTheme.native";
import StyledText from '../Text/StyledText.native';
import { ButtonProps } from './Button.native';
import { ExitButtonContainer } from './ButtonStyledComponents.native';

const ExitButton = ({ onPress }: ButtonProps) => {
  const theme = useGetTheme();
  {/* TODO: Change to icon button */}
  return (
    <ExitButtonContainer backgroundColor={theme.midGrey} onPress={onPress}>
      <StyledText color={theme.darkGrey}>x</StyledText>
     </ExitButtonContainer>
  );
};

export default ExitButton;