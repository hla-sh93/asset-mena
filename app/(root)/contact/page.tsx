'use client'

import Image from 'next/image'
// Components
import { HeroSection } from '@/components/hero-section'
import { PageTitle } from '@/components/page-title'
import { ContactForm, FooterContactData } from '@/views'
// Image
import { ContactImage } from '@/public/images'
// Recaptcha
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const ContactPage = () => {
  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? 'NOT DEFINED'}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <main className="animate-slideUpEnter">
        <HeroSection />

        <section className="custom-container pb-16 pt-12 md:pb-32">
          <PageTitle
            name="contact us"
            title="Take the First Step Towards Your Goals"
          />
          <div className="mt-20 flex flex-col justify-between gap-14 md:flex-row">
            <ContactForm />
            <div>
              <FooterContactData isFooter={false} />
              <Image
                src={ContactImage}
                alt="contact us"
                className="mx-auto mt-5 aspect-square h-80 w-80 lg:h-96 lg:w-96"
              />
            </div>
          </div>
        </section>
      </main>
    </GoogleReCaptchaProvider>
  )
}

export default ContactPage
