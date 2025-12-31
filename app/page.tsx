import About from '@/components/about';
import Hero from '@/components/hero';
import LangButton from '@/components/lang-button';
import MatrixRainingCode from '@/components/matrix';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <LangButton />
      <Hero />
      <About/>
      <MatrixRainingCode />
    </div>
  );
}
