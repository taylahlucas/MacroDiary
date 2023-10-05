import React from 'react';
import { SafeAreaView } from 'react-native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';

interface StandardLayoutProps {
  children: any;
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  const theme = useGetTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme.black, width: '100%', height: '100%', alignItems: 'center' }}>
      {children}
    </SafeAreaView>
  );
};

export default StandardLayout;