import { PropsWithChildren } from 'react';
import SunnyCloud from '../../icons/SunnyCloud/SunnyCloud';
import GlassBackground from '../glass-background/GlassBackground';
import Text from '../text/Text';
import { ForecastItemProps } from './types';

const GlassCardText: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <Text className='text-[var(--color-white)] font-medium text-xl'>
      {children}
    </Text>
  );
};

export default function ForecastItem({
  heading,
  temperature,
  icon,
}: ForecastItemProps) {
  return (
    <li className='grow'>
      {' '}
      <GlassBackground className='w-full flex flex-col items-center h-[227px] pt-6 pb-4 [&>svg]:w-[150px]'>
        <GlassCardText>{heading}</GlassCardText>
        {icon}
        <GlassCardText>{temperature}°</GlassCardText>
      </GlassBackground>
    </li>
  );
}
