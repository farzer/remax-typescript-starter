/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useStores, TStore } from '@/hooks/useStores';

// HOC
export const injectStore = (storeName: keyof TStore, Component: any) => (
  props: any
): any => {
  const stores = useStores();
  const newProps = { ...props };
  newProps[storeName] = stores[storeName];

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...newProps} />;
};
