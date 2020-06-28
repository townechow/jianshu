import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading() { //加载过程展示的内容，JSX语法记得引入 React;
      return <div>正在加载...</div>
  }
});

export default () => <LoadableComponent/> //通过无状态组件导出

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }