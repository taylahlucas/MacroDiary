import React from 'react';
import { View } from 'react-native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import { ProductDataType } from '@utils/CustomTypes.native';
import ScrollableList from '@components/general/List/ScrollableList.native';
import Spacing from '@components/general/Spacing.native';
import StyledText from '@components/general/Text/StyledText.native';
import { styles } from '../ScannedItem/ScannedItemStyles.native';

interface RecipeItemProps {
  title: string;
  ingredients: ProductDataType[];
}

const RecipeItem = ({ title, ingredients }: RecipeItemProps) => {
  const theme = useGetTheme();

  return (
    <ScrollableList style={styles.scrollContainer}>
      <View style={{ ...styles.container, backgroundColor: theme.darkPurple }}>
      <Spacing height={16}/>
      <StyledText type={'ListItemSubTitleBold'}>{title}</StyledText>
        {/* <Spacing height={16}/>
        <View style={styles.chartContainer}>
          <CustomPieChart isDonut={true} data={data} />
        </View>
        <View style={{ marginLeft: 16 }}>
          <StyledText type={'ListItemSubTitleBold'} align={'right'}>per 100g</StyledText>
          <Spacing height={16} />
          {Object.entries(data).map((name, index) => (
            <ScannedItemContent key={index} name={name[1].title} amount={name[1].value} />
          ))}
        </View> */}
      </View>
    </ScrollableList>
  );
};

export default RecipeItem;