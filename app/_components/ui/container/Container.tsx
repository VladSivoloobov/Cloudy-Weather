import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { ContainerProps } from './types';

export default function Container({
  className,
  paddingX = '63px',
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
      className={clsx(`container mx-auto max-w-[1440px]`, paddingX, className)}
    />
  );
}
