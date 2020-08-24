import * as React from 'react';
import { StoresContext, useStores } from './hooks/useStores';

import './app.less';

const App: React.FC = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const store = useStores();
  return (
    <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
  );
};

export default App;
