'use client'
import { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/components/embla-carousel-dot-button'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { homeCarouselData } from '@/data'
import { cn } from '@/lib/utils'
import {
  LastCarouselImage1,
  LastCarouselImage2,
  LastCarouselImage3,
  LastCarouselImage4,
} from '@/public/images'

export const EndCarousel = () => {
  const options: EmblaOptionsType = { loop: true }
  // const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.options.active === false ? autoplay.reset : autoplay.stop
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  )

  return (
    <section className="custom-container mt-10 md:mt-16">
      <div className="flex items-center justify-center">
        <div className="embla flex max-w-full flex-col justify-between">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container md:h-[45vh]">
              {[
                LastCarouselImage1,
                LastCarouselImage2,
                LastCarouselImage3,
                LastCarouselImage4,
              ]?.map((image, imageIndex) => (
                <div
                  className="embla__slide flex flex-col items-center justify-between gap-16 rounded-md md:flex-row md:justify-center 2xl:gap-36"
                  key={imageIndex}
                >
                  <Image
                    src={image}
                    alt={'image'}
                    className="aspect-[4/3] max-h-full w-full rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
