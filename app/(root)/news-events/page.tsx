import { Metadata } from 'next'
// Components
import { PageTitle } from '@/components/page-title'
import { HeroSection } from '@/components/hero-section'
import { NewsCard } from '@/components/news-card'
// Data
import { NewsCardsData } from '@/data'

export const metadata: Metadata = {
  title: 'News & Events | ASSET',
  description:
    'A line of modern high-performance X-ray units for inspecting luggage, personal belongings, office equipment, and mail at transportation hubs',
}

const NewsEventsPage = () => {
  return (
    <main className="animate-slideUpEnter">
      <HeroSection />

      <section className="custom-container pb-16 pt-12 md:pb-40">
        <PageTitle
          name="News & Events"
          title="Unlock the Future of Security: Explore News & Events"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {NewsCardsData?.map((item, itemIndex) => (
            <NewsCard data={item} key={itemIndex} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default NewsEventsPage
