import { Children, ComponentPropsWithoutRef } from 'react';
import GlassCard from '../forecast-item/ForecastItem';
import SunnyCloud from '../../icons/SunnyCloud/SunnyCloud';
import clsx from 'clsx';

export default function ForecastList({
  className,
  children: _children,
  ...props
}: ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul {...props} className={clsx('flex gap-3.5', className)}>
      <GlassCard heading='10:00' temperature='29' icon={<SunnyCloud />} />
      <GlassCard heading='10:00' temperature='29' icon={<SunnyCloud />} />
      <GlassCard heading='10:00' temperature='29' icon={<SunnyCloud />} />
    </ul>
  );
}
