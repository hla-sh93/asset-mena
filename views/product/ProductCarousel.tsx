'use client'

import { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/components/embla-carousel-dot-button'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { homeCarouselData } from '@/data'
import { cn } from '@/lib/utils'
import { IProduct } from '@/types'

export const ProductCarousel = ({ data }: { data: IProduct | undefined }) => {
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
    <div className="flex w-full flex-col items-center justify-center lg:w-2/6 lg:items-start lg:justify-normal">
      <h2 className="h5-title hidden text-secondary lg:inline-flex">
        {data?.name}
      </h2>
      <div className="embla mt-6 flex max-w-full flex-col justify-between gap-8 sm:max-w-[60%] lg:max-w-full">
        <div className="embla__viewport rounded-2xl" ref={emblaRef}>
          <div className="embla__container">
            {data?.listOfImages?.map((product, ProductIndex) => (
              <div
                className="embla__slide w-full sm:w-3/4 lg:w-full"
                key={ProductIndex}
              >
                <Image
                  src={product}
                  alt={data?.name}
                  className="aspect-[4/3] max-h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__dots pb-5">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={cn(
                  'embla__dot bg-text-light',
                  index === selectedIndex && '!bg-primary',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
