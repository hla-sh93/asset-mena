import { footerContactData, footerLinks } from '@/data'
import { AssetWhite } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { FooterContactData, FooterLinksSection } from '.'

export const Footer = () => {
  return (
    <footer className="bg-headerFooterGradient">
      <div className="custom-container flex flex-col items-center justify-center gap-10 py-6 md:justify-between md:gap-6 md:py-8 lg:flex-row">
        <Link href={'/'}>
          <Image
            src={AssetWhite}
            alt="ASSET Logo"
            width={130}
            className="aspect-[130/47]"
            loading="eager"
          />
        </Link>

        <FooterLinksSection className="hidden lg:inline-flex" />
        <FooterContactData className="hidden lg:inline-flex" />

        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row lg:hidden">
          <FooterLinksSection />
          <FooterContactData />
        </div>
      </div>
    </footer>
  )
}
