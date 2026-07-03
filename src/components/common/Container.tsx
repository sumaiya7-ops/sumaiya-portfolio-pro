import { ReactNode } from 'react';
import { CONTAINER } from '@/constants/design';
import clsx from 'clsx';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div className={clsx(CONTAINER, className)}>
      {children}
    </div>
  );
}