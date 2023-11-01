import React from 'react';
import { StandardLayoutContainer } from './StandardLayoutStyledComponents.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import { Image } from 'react-native';

interface StandardLayoutProps {
  children: any;
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  const theme = useGetTheme();

  return (
    <>
      {/* <Image 
        source={require('../../../assets/images/app_background.png')}
        style={{ flex: 1, resizeMode: 'cover', width: '100%', height: '100%', zIndex: -1 }}
      /> */}
      {/* TODO: Decide on whether to use background or not backgroundColor={theme.darkGrey} */}
      <StandardLayoutContainer color={theme.black}>
      {children}
    </StandardLayoutContainer>
    </>
  );
};

export default StandardLayout;