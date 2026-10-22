// data
import { aboutUsData } from '@/data'
// Components
import { AboutUsMission, AboutUsValues, HomeCarousel } from '.'

export const AboutUs = () => {
  return (
    <section className="custom-container py-2 max-md:mt-6 md:py-10">
      <h2 className="h3-title text-center font-semibold uppercase text-primary">
        About Us
      </h2>
      <p className="body-text mt-3 text-center text-text-dark md:mt-4">
        {aboutUsData?.desc}
      </p>

      <HomeCarousel />

      <AboutUsMission />

      <AboutUsValues />

      {/* <Image
        src={LastHomeImage}
        alt="overview image"
        className="mt-10 w-full"
      /> */}
    </section>
  )
}
