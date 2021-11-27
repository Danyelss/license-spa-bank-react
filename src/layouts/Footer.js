import React from 'react';
import { css } from '@emotion/react';

const footerStyle = css`
  padding: 40px 16px;
  & > nav {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Footer = () => {
  return (
    <footer css={[footerStyle]}>
      <nav>
        <div> </div>
        <div>
          <a href="https://github.com/Danyelss/License-SPA-React" rel="noopener noreferrer" target="_blank">
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
