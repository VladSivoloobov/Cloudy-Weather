'use client';

import SunnyCloud from '../../icons/SunnyCloud/SunnyCloud';
import WeatherLabel from '../weather-label/WeatherLabel';
import Text from '../text/Text';
import { Line, LineChart } from 'recharts';
import Title from '../title/Title';
import GlassBackground from '../glass-background/GlassBackground';
import Container from '../container/Container';
import clsx from 'clsx';
import styles from './Overview.module.css';
import { LinearGradient } from 'react-text-gradients';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Overview() {
  return (
    <GlassBackground className='pt-[68px] pb-[24px] h-[801px]'>
      <Container paddingX='24px'>
        <div className='relative min-h-[320px]'>
          <div className='relative'>
            <div className='relative w-max mx-auto'>
              <div
                className={clsx(
                  `text-[160px] text-center line leading-[191px] text-[var(--color-white)]`,
                  `scale-y-[1.5] scale-x-[1.3] translate-y-[40px] w-max mx-auto`,
                  styles['overview-title']
                )}
              >
                <LinearGradient
                  gradient={[
                    'to bottom',
                    'var(--color-white) 35%, rgba(255, 255, 255, 0)',
                  ]}
                >
                  28
                </LinearGradient>
              </div>
              <div
                className={clsx(
                  'absolute h-[70px] w-[70px] rounded-full top-0 right-[-100px]',
                  styles['title-dot']
                )}
              ></div>
            </div>
            <SunnyCloud className='absolute left-0 right-0 bottom-[-115%] top-auto m-auto' />
          </div>
          <WeatherLabel
            className='absolute left-0 bottom-0'
            title='Wind'
            subtitle='9 km/h'
          />
          <WeatherLabel
            className='absolute right-0 bottom-0'
            title='Humidity'
            subtitle='79%'
          />
        </div>
        <Text className='mt-[100px] overview-info-text font-medium'>
          Monday 29, March
        </Text>
      </Container>
      <LineChart
        className='h-[102px] mt-[53px] w-full outline-none *:outline-none'
        responsive
        data={data}
      >
        <defs>
          <linearGradient id='overview-chart-gradient'>
            <stop offset='0' stopColor='white' stopOpacity={0} />
            <stop offset='50%' stopColor='white' stopOpacity={1} />
            <stop offset='100%' stopColor='white' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Line
          dot={false}
          type='monotone'
          dataKey='pv'
          strokeWidth={2}
          activeDot={{ r: 6 }}
          stroke='url(#overview-chart-gradient)'
        />
      </LineChart>
      <Container paddingX='24px'>
        <Title className='overview-info-text font-medium text-4xl mt-[24px]'>
          Volgograd City
        </Title>
      </Container>
    </GlassBackground>
  );
}
