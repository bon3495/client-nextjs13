import { FC } from 'react';

import DashBoardContent from '@/containers/dashboard-content';

interface IDashBoardProps {}

const DashBoard: FC<IDashBoardProps> = ({}) => {
  return (
    <div className="container flex justify-center">
      <DashBoardContent />
    </div>
  );
};

export default DashBoard;
