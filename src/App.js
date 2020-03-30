import React from 'react';
import { GlobalStyled } from './style';

import { GlobalStyledIconFont } from './static/iconfont/iconfont';
import Header from './common/header';

import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <GlobalStyledIconFont />
      <Header />
    </Provider>
  );
}

export default App;
