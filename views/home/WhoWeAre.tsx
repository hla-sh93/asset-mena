import Image from 'next/image'
import { bottomWhoWeAreData, topWhoWeAreData } from '@/data'
import { WhoWeAreImage, WhoWeAreImage2, WhoWeAreImage3 } from '@/public/images'

export const WhoWeAre = () => {
  return (
    <section className="custom-container py-10 md:py-16">
      <p className="secondary-text text-center uppercase text-text-light">
        who we are
      </p>
      <h1 className="h3-title mx-auto mt-5 max-w-prose text-center font-semibold text-primary">
        WELCOME TO ASSET COMPANY
      </h1>

      <div className="mt-12">
        <h2 className="h3-title text-center font-semibold uppercase text-primary lg:text-start">
          who we are
        </h2>

        {/* Responsive Layout for Text and Images */}
        <div className="flex flex-col-reverse items-center gap-6 lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Text Section */}
          <div className="lg:col-span-2">
            {topWhoWeAreData?.map((item, index) => (
              <p
                key={index}
                className="body-text mt-3 text-justify text-text-dark dark:text-text-light md:mt-5"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-1">
            {/* Two Vertical Images */}
            <Image
              src={WhoWeAreImage}
              alt="Who We Are"
              className="h-64 w-full rounded-lg object-cover"
            />
            <Image
              src={WhoWeAreImage2}
              alt="Who We Are"
              className="h-64 w-full rounded-lg object-cover"
            />
            {/* Horizontal Image */}
            <Image
              src={WhoWeAreImage3}
              alt="Who We Are"
              className="col-span-2 h-40 w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Additional text content */}
        {bottomWhoWeAreData?.map((item, index) => (
          <p
            key={index}
            className="body-text mt-3 text-justify text-text-dark dark:text-text-light md:mt-5"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
