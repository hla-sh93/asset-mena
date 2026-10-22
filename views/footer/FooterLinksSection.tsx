import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
// Data
import { footerLinks } from '@/data'
// Images
import {
  FooterFirstImage,
  FooterSecondImage,
  FooterThirdImage,
} from '@/public/images'

export const FooterLinksSection = ({ className }: { className?: string }) => {
  const images = [FooterFirstImage, FooterSecondImage, FooterThirdImage]
  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <ul className="flex items-center gap-4 md:gap-10">
        {footerLinks?.map((link, linkIndex) => (
          <li key={linkIndex} className="w-max">
            <Link
              href={link?.link}
              className="secondary-text primary-transition uppercase text-white hover:text-text-light"
            >
              {link?.text}
            </Link>
          </li>
        ))}
      </ul>

      <p className="secondary-text mt-2 text-white">
        ⓒ ASSET {new Date().getFullYear()}. All rights reserved
      </p>

      <div className="flex items-center gap-2">
        {images?.map((image, imageIndex) => (
          <Image
            src={image}
            alt="Footer image"
            width={30}
            height={30}
            className="aspect-square"
            loading="eager"
            key={imageIndex}
          />
        ))}
      </div>
    </div>
  )
}
