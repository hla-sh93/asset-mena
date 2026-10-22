import { ProductCard } from '@/components/product-card'
import { HeroSection } from '@/components/hero-section'
import { PageTitle } from '@/components/page-title'
import { categoriesWithProductsData } from '@/data'
import { SearchParamProps } from '@/types'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: SearchParamProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const title = params.category

  return {
    title: 'ASSET | ' + title,
  }
}

const CategoriesPage = ({ params }: SearchParamProps) => {
  const selectedCategory = categoriesWithProductsData.find(
    (category) => category.url === `/${params?.category}`,
  )

  return (
    <main className="animate-slideUpEnter">
      <HeroSection />

      <section className="custom-container pb-16 pt-12 md:pb-32">
        <PageTitle name={'Products'} title={selectedCategory?.name} />

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {selectedCategory?.data?.map((product, productIndex) => (
            <ProductCard data={product} key={productIndex} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default CategoriesPage
