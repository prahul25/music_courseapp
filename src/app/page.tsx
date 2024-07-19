import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusiceSchoolTestimonialCards from "@/components/TestimonialCards";
import Webinar from "@/components/Webinar";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-black/[0.92] antialiased ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusiceSchoolTestimonialCards />
      <Webinar/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
