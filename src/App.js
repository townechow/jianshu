import React,{ Fragment } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import { GlobalStyled } from './style.js'
import {Provider } from 'react-redux';
import { IconfontStyled } from './statics/iconfont/iconfont.js';
import Header from './common/header';
import store from './store/index.js';
import Home from './pages/home/index';
import Detail from './pages/detail/loadaber.js';
import Login from './pages/login/index';
import Write from './pages/write/index';

function App() {    // 另一种写法class App extends Component { render(){ return()}}
  return (
	<Fragment>
		<Provider store={store}>
		<GlobalStyled/>
		<IconfontStyled/>       
			<BrowserRouter>
			<Fragment>
				<Header/>
				<Route path={`${window.beforeRoute}/index`} exact component ={Home}></Route>
				<Route path={`${window.beforeRoute}/detail/:id`} exact component ={Detail}></Route>
				<Route path={`${window.beforeRoute}/write`} exact component ={Write}></Route>
				<Route path={`${window.beforeRoute}/login`} exact component ={Login}></Route>
				 {/* /detail/:id 访问该路径再传入参数id*/}
			</Fragment>
			</BrowserRouter>
		</Provider>
	</Fragment>
);
}

export default App;

