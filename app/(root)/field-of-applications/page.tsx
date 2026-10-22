import { ProductCard } from '@/components/product-card'
import { HeroSection } from '@/components/hero-section'
import { PageTitle } from '@/components/page-title'
import { fieldsOfApplicationsData, subDomainsData } from '@/data'
import { IProductCard, SearchParamProps } from '@/types'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { searchParams }: { searchParams: { [key: string]: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const field = searchParams?.field

  return {
    title: 'ASSET | ' + field,
  }
}

const FieldOfApplicationsPage = ({ searchParams }: SearchParamProps) => {
  const selectedField = fieldsOfApplicationsData.find(
    (field) => field?.url === searchParams?.field,
  )

  const selectedSubDomain = subDomainsData.find(
    (subdomain) => subdomain?.field === searchParams?.field,
  )

  return (
    <main className="animate-slideUpEnter">
      <HeroSection />

      <section className="custom-container pt-12">
        <PageTitle name="Field of applications" title={selectedField?.name} />
        <p className="body-text mt-12 text-text-dark">{selectedField?.desc}</p>
      </section>
      <section className="custom-container pb-32 pt-12">
        <div>
          <h2 className="h3-title text-primary">Baggage and parcel</h2>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {selectedSubDomain?.content[0]?.data?.map(
              (item: IProductCard, itemIndex: number) => (
                <ProductCard data={item} key={itemIndex} />
              ),
            )}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="h3-title text-primary">People screening</h2>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {selectedSubDomain?.content[1]?.data?.map(
              (item: IProductCard, itemIndex: number) => (
                <ProductCard data={item} key={itemIndex} />
              ),
            )}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="h3-title text-primary">Cargo inspection</h2>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {selectedSubDomain?.content[2]?.data?.map(
              (item: IProductCard, itemIndex: number) => (
                <ProductCard data={item} key={itemIndex} />
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FieldOfApplicationsPage
