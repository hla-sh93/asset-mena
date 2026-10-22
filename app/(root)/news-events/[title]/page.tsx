import { HeroSection } from '@/components/hero-section'
import { PageTitle } from '@/components/page-title'
import { newsDetailsData } from '@/data'
import { SearchParamProps } from '@/types'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: SearchParamProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const title = params.title

  return {
    title: title,
  }
}

const NewsDetailsPage = ({ params }: SearchParamProps) => {
  // get the specific news details content based on the title parameter
  const selectedNews = newsDetailsData.find(
    (news) => news.url === params?.title,
  )

  return (
    <main className="animate-slideUpEnter">
      <HeroSection />

      <section className="custom-container pb-16 pt-12 md:pb-32">
        <PageTitle name={selectedNews?.date} title={selectedNews?.title} />

        <div className="mt-10 md:mt-16">
          {selectedNews?.data?.map((text, textIndex) => (
            <p className="body-text text-text-dark" key={textIndex}>
              {text}
              <br />
              <br />
            </p>
          ))}
        </div>
      </section>
    </main>
  )
}

export default NewsDetailsPage
