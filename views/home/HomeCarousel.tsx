'use client'
import { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/components/embla-carousel-dot-button'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { homeCarouselData } from '@/data'
import { cn } from '@/lib/utils'

export const HomeCarousel = () => {
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
    <section className="mt-10 md:mt-16">
      <div className="flex min-h-[50vh] items-center justify-center bg-[url('/images/home/carousel-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="embla flex min-h-[50vh] max-w-full flex-col justify-between">
          <div className="embla__viewport" ref={emblaRef} dir="ltr">
            <div className="embla__container md:h-[54vh]">
              {homeCarouselData?.map((product, ProductIndex) => (
                <div
                  className="embla__slide flex flex-col items-center justify-center gap-12 px-4 pb-10 pt-6 md:flex-row md:pt-12 2xl:gap-36"
                  key={ProductIndex}
                >
                  <Image
                    src={product?.image}
                    alt={product?.alt}
                    className="aspect-square max-h-full w-72 object-contain md:w-96 2xl:w-1/3"
                  />
                  <div className="flex w-3/4 flex-col gap-5 md:w-2/5">
                    <h2 className="h2-title text-white 2xl:text-3xl">
                      {product?.title}
                    </h2>
                    <p className="body-text line-clamp-[10] text-white 2xl:text-2xl 2xl:!leading-[2.75rem]">
                      {product?.desc}
                    </p>
                  </div>
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
                    index === selectedIndex && '!bg-white',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
