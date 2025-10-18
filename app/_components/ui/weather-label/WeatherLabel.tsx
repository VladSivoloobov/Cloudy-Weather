import clsx from 'clsx';
import Text from '../text/Text';
import { WeatherLabelProps } from './types';

export default function WeatherLabel({
  title,
  subtitle,
  className,
  ...props
}: WeatherLabelProps) {
  return (
    <div className={clsx('w-max', className)} {...props}>
      <Text className='text-[var(--color-white)] font-medium text-xl text-center'>
        {title}
      </Text>
      <Text className='text-[var(--color-white)] font-semibold text-2xl text-center'>
        {subtitle}
      </Text>
    </div>
  );
}
