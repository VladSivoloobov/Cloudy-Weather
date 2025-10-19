import Container from './_components/ui/container/Container';
import ForecastList from './_components/ui/forecast-list/ForecastList';
import GlassBackground from './_components/ui/glass-background/GlassBackground';
import GlassCard from './_components/ui/forecast-item/ForecastItem';
import Overview from './_components/ui/overview/Overview';
import StatisticGrid from './_components/ui/statistic-grid/StatisticGrid';
import UvCard from './_components/ui/uv-card/UvCard';

export default function Page() {
  return (
    <main className='h-full py-[76px]'>
      <Container className='flex h-full gap-[75px]'>
        <section className='grow shrink basis-[100%] h-full'>
          <Overview />
        </section>
        <section className='grow shrink basis-[100%]'>
          <ForecastList className='mb-5' />
          <StatisticGrid>
            <UvCard />
          </StatisticGrid>
        </section>
      </Container>
    </main>
  );
}
