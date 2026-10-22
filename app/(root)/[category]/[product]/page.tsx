import { HeroSection } from '@/components/hero-section'
import { PageTitle } from '@/components/page-title'
import { ProductsList } from '@/data/productsData'
import { SearchParamProps } from '@/types'
import { ProductCarousel, ProductTabs } from '@/views'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: SearchParamProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const title = params.product

  return {
    title: 'ASSET | ' + title,
  }
}

const ProductDetailsPage = ({ params }: SearchParamProps) => {
  const selectedProduct = ProductsList.find(
    (oneProduct) => oneProduct?.url === `/${params.product}`,
  )

  return (
    <main className="animate-slideUpEnter">
      <HeroSection />

      <section className="custom-container pt-12">
        <PageTitle
          name="product"
          title={
            selectedProduct?.url === `/${params.product}`
              ? selectedProduct?.fullName
              : ''
          }
        />
      </section>

      <section className="custom-container flex flex-col justify-between gap-12 pb-16 pt-12 md:pb-32 lg:flex-row">
        <ProductCarousel data={selectedProduct} />

        <ProductTabs data={selectedProduct} />
      </section>
    </main>
  )
}

export default ProductDetailsPage
