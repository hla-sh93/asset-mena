import { aboutUsData } from '@/data'
import { AboutUsImage } from '@/public/images'
import Image from 'next/image'

export const AboutUsMission = () => {
  return (
    <>
      <div className="mt-7 flex flex-col items-center gap-4 md:mt-10 md:flex-row md:gap-12 lg:mt-14">
        {/* Text Section with 75% width on md and larger */}
        <div className="w-full lg:w-3/4">
          <h3 className="h5-title uppercase text-secondary">Our Mission</h3>
          {aboutUsData?.mission?.map((item, index) => (
            <p
              className="body-text mt-3 text-justify text-text-dark dark:text-text-light md:mt-4"
              key={index}
            >
              {item}
            </p>
          ))}
          <h3 className="h5-title mt-6 uppercase text-secondary md:mt-8">
            Our Vision
          </h3>
          <p className="body-text mt-3 text-text-dark md:mt-4">
            {aboutUsData?.vision}
          </p>
        </div>

        {/* Image Section with 25% width on md and larger */}
        <div className="h-auto w-full lg:w-1/4">
          <Image
            src={AboutUsImage}
            alt="About Us"
            className="!h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  )
}
