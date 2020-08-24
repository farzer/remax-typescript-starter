import * as React from 'react';
import { UserStore } from '@/stores';

export const store = {
  userStore: new UserStore(),
};

export type TStore = typeof store;

export const StoresContext = React.createContext(store);

export const useStores = () => {
  const allStore = React.useContext(StoresContext);
  return allStore;
};
