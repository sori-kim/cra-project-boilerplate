import emotionNormalize from 'emotion-normalize';
import { Global, css } from '@emotion/react';

import React from 'react';

const GlobalStyle = (): React.ReactElement => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        html {
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-size: 62.5%;
          vertical-align: baseline;
          font-weight: 400;
        }
      `}
    />
  );
};

export default GlobalStyle;
