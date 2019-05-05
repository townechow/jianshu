import React,{ Fragment } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import { GlobalStyled } from './style.js'
import {Provider } from 'react-redux';
import { IconfontStyled } from './statics/iconfont/iconfont.js'
import Header from './common/header';
import store from './store/index.js';
import Home from './pages/home/index'
import Detail from './pages/detail/index'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
      <GlobalStyled/>
      <IconfontStyled/>
        <Header/>
        <BrowserRouter>
          <Fragment>
            <Route path='/' exact component ={Home}></Route>
            <Route path='/detail' exact component ={Detail}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
