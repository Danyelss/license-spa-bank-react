import React from 'react';
import { Global, css } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <>
      <Global styles={[globalStyle(theme)]} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
