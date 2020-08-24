/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useStores } from '@/hooks/useStores';
// HOC
export const withStore = (Component: any) => (props: any): any => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} store={useStores()} />;
};
