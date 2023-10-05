import { Pressable } from 'react-native';
import { ScannedItemListTitle } from './ScannedItemStyledComponents.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';
import useMainState from '../../../redux/hooks/useMainState.native';

interface ScannedItemMenuItemProps {
  index: number;
  title: string;
}

const ScannedItemMenuItem = ({ index, title }: ScannedItemMenuItemProps) => {
  const theme = useGetTheme();
  const { setSelectedSearchTableIndex } = useMainDispatch();
  const { selectedSearchTableIndex } = useMainState();
  const isFocused = index === selectedSearchTableIndex;

  return (
    <Pressable onPress={(): void => setSelectedSearchTableIndex(index)}>
      <ScannedItemListTitle color={isFocused ? theme.lightPurple : theme.midGrey} type={'ListItemSubTitle'}>{title}</ScannedItemListTitle>
    </Pressable>
  );
};

export default ScannedItemMenuItem;