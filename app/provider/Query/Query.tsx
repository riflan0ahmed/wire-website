'use client';

import { memo, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

type ProviderQueryProps = {
  children: ReactNode;
};

const ProviderQuery = ({ children }: ProviderQueryProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default memo(ProviderQuery);
