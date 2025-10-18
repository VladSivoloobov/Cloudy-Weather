import { ComponentPropsWithoutRef } from 'react';

export type WeatherLabelProps = {
  title: string;
  subtitle: string;
} & ComponentPropsWithoutRef<'div'>;
