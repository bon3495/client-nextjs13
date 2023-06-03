import { FC } from 'react';

import HomePage from '@/containers/home-page';

interface IHomeProps {}

const Home: FC<IHomeProps> = ({}) => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
