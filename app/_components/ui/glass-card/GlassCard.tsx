import clsx from 'clsx';
import GlassBackground from '../glass-background/GlassBackground';
import Text from '../text/Text';
import { GlassCardProps } from './types';

export default function GlassCard({
  heading,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <GlassBackground {...props} className={clsx('min-h-[159px] pl-4 pt-3')}>
      <Text className='text-base uppercase font-medium'>{heading}</Text>
      {children}
    </GlassBackground>
  );
}
