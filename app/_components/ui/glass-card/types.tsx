import { ComponentPropsWithoutRef } from 'react';

export type GlassCardProps = {
  heading: string;
} & ComponentPropsWithoutRef<'div'>;
