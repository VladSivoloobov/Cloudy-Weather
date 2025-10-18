import { ComponentPropsWithoutRef } from 'react';

export type ContainerProps = {
  paddingX?: string;
} & ComponentPropsWithoutRef<'div'>;
