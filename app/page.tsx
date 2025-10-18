import Container from './_components/ui/container/Container';
import GlassBackground from './_components/ui/glass-background/GlassBackground';
import Overview from './_components/ui/overview/Overview';

export default function Page() {
  return (
    <main className='h-full py-[76px]'>
      <Container className='flex h-full gap-[75px]'>
        <section className='grow shrink basis-[100%] h-full'>
          <Overview />
        </section>
        <section className='grow shrink basis-[100%]'>
          <GlassBackground></GlassBackground>
        </section>
      </Container>
    </main>
  );
}
