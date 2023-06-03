'use client';

import { FC } from 'react';

import { Button } from '@/components/ui/button';

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = ({}) => {
  return (
    <div>
      <Button onClick={() => {}}>Sign In</Button>
    </div>
  );
};

export default HomePage;
