'use client';

import { FC } from 'react';

import { Button } from '@/components/ui/button';

interface IDashBoardContentProps {}

const DashBoardContent: FC<IDashBoardContentProps> = ({}) => {
  return (
    <div>
      DashBoardContent
      <Button onClick={() => {}}>Sign Out</Button>
    </div>
  );
};

export default DashBoardContent;
