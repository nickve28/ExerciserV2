import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheetManager } from 'styled-components';
import App from './App';
import { CSSReset } from './CSSReset';
import { GlobalStyling } from './GlobalStyling';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <StyleSheetManager disableVendorPrefixes>
      <>
        <CSSReset />
        <GlobalStyling />
        <App />
      </>
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
