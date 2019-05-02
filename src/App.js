import React,{ Fragment } from 'react';
import { GlobalStyled } from './style.js'
import { IconfontStyled } from './statics/iconfont/iconfont.js'
import Header from './common/header';
import {Provider } from 'react-redux';
import store from './store/index.js';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
      <GlobalStyled/>
      <IconfontStyled/>
        <Header/>
      </Provider>
    </Fragment>
  );
}

export default App;
