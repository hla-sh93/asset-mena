import { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { ImageCard } from '@/components/image-card'
import { MapComponent } from '@/components/map'
import { PageTitle } from '@/components/page-title'
import { marketsData } from '@/data'

export const metadata: Metadata = {
  title: 'Markets | ASSET',
  description:
    'A line of modern high-performance X-ray units for inspecting luggage, personal belongings, office equipment, and mail at transportation hubs',
}

const MarketsPage = () => {
  return (
    <main className="animate-slideUpEnter">
      <HeroSection />

      <section className="custom-container pb-16 pt-12 md:pb-32">
        <PageTitle
          name="Markets"
          title="Serving Diverse Industries Worldwide"
        />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861093.4514351552!2d52.62906575649618!3d24.348298836248038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1735213516724!5m2!1sen!2s"
          width="100%"
          height="520"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          className="mt-12 border-0"
        ></iframe>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-28 lg:grid-cols-4">
          {marketsData?.map((market, marketIndex) => (
            <ImageCard data={market} key={marketIndex} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default MarketsPage
