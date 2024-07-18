import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/Herosection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.92] antialiased bg-grid-white/[0.04]">
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  );
}
