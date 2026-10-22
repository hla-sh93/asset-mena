'use client'

import { IProductCard } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const ProductCard = ({ data }: { data: IProductCard }) => {
  const pathname = usePathname()
  return (
    <Link href={pathname + data?.url}>
      <article className="group relative h-full w-72 transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:bg-cardBg">
        <div className="relative w-full overflow-hidden pt-[100%]">
          <Image
            src={data?.mainImage}
            alt={data?.name}
            className="absolute left-0 top-0 h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h2 className="h6-title text-center text-gray-800 transition-colors group-hover:text-primary dark:text-secondary">
            {data?.name}
          </h2>
        </div>
      </article>
    </Link>
  )
}

export const ProductList = ({ products }: { products: IProductCard[] }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </div>
  )
}
