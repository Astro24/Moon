import AboutMoon from '@/app/components/about/AboutMoon';
import HowWeWork from '@/app/components/about/HowWeWork';
import Team from '@/app/components/about/Team';
import Newsletter from '@/app/components/shared/NewsLetter';

export default function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <AboutMoon />
      <HowWeWork />
      <Team />
      <Newsletter />
    </div>
  );
}


