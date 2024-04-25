import Hero from '@/components/hero';
import MatrixRainingCode from '@/components/matrix';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <Hero />
      <MatrixRainingCode />
    </div>
  );
}
