import { cn } from '@/lib/utils'
import { HeroImage, HomeHeroImage } from '@/public/images'
import Image from 'next/image'

export const HeroSection = ({ isHome = false }: { isHome?: boolean }) => {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src={isHome ? HomeHeroImage : HeroImage}
        alt="Hero Home Image"
        loading="eager"
        priority={true}
        className={cn(
          '!h-auto w-full', // Ensures full width
          isHome ? 'h-[40vh] md:h-[60vh]' : 'h-[30vh] md:h-[45vh]', // Adjust height based on isHome prop
          'object-contain md:object-cover', // Contain on mobile, cover on larger screens
        )}
      />
    </section>
  )
}
