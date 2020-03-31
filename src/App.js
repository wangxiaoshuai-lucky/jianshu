import React from 'react';
import { GlobalStyled } from './style';
import { GlobalStyledIconFont } from './static/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <GlobalStyledIconFont />
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/detail' exact component={Detail} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
