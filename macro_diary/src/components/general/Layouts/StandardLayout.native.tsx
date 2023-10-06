import React from 'react';
import { StandardLayoutContainer } from './StandardLayoutStyledComponents.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';

interface StandardLayoutProps {
  children: any;
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  const theme = useGetTheme();

  return (
    <StandardLayoutContainer backgroundColor={theme.black}>
      {children}
    </StandardLayoutContainer>
  );
};

export default StandardLayout;