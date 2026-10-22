'use client'
import { categoriesWithProductsData } from '@/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { useState } from 'react'

export const ProductsMegaMenu = ({ handleNavbarToggle }: any) => {
  const [activeTab, setActiveTab] = useState(0)
  const params = useParams()

  return (
    <>
      <ul className="flex flex-col gap-5 bg-primaryBg px-10 py-8">
        {categoriesWithProductsData?.map((category, categoryIndex) => (
          <li key={categoryIndex}>
            <button
              className={cn(
                'body-text w-auto text-start uppercase hover:text-primary md:w-max',
                categoryIndex === activeTab ? 'text-primary' : 'text-text-dark',
              )}
              onClick={() => setActiveTab(categoryIndex)}
            >
              {category?.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className="grid flex-1 grid-cols-2 place-items-center gap-7 bg-primaryBg px-12 py-8 min-[991px]:grid-cols-3 min-[991px]:grid-rows-3">
        {categoriesWithProductsData[activeTab]?.data?.map(
          (product, productIndex) => (
            <Link
              href={categoriesWithProductsData[activeTab]?.url + product?.url}
              key={productIndex}
              className="group flex w-full flex-col items-center gap-2"
              onClick={() => {
                handleNavbarToggle()
              }}
            >
              <Image
                src={product?.mainImage}
                alt={product?.name}
                width={54}
                height={40}
                className="rounded"
              />
              <span
                className={cn(
                  'body-text primary-transition text-center uppercase text-text-dark group-hover:text-secondary',
                  `/${params?.product}` === product?.url && 'text-secondary',
                )}
              >
                {product?.name}
              </span>
            </Link>
          ),
        )}
      </ul>
    </>
  )
}
