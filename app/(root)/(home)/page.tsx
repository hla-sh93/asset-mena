import { HeroSection } from '@/components/hero-section'
import { AboutUs, CategoriesSection, EndCarousel, HomeCarousel } from '@/views'

const HomePage = () => {
  return (
    <main className="animate-slideUpEnter pb-12">
      <HeroSection isHome={true} />
      <CategoriesSection />
      {/* <WhoWeAre /> */}
      {/* <HomeCarousel /> */}
      <AboutUs />
      <EndCarousel />
    </main>
  )
}

export default HomePage
