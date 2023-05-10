'use client';

import { FC, useEffect } from 'react';

import { setupConfig } from '@/config/setupConfig';

interface ISetupConfigProps {
  children: React.ReactNode;
}

const SetupConfig: FC<ISetupConfigProps> = ({ children }) => {
  useEffect(() => {
    setupConfig.validateConfig();
  }, []);

  return <>{children}</>;
};

export default SetupConfig;
