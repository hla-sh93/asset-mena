import { ICategory } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface ICategoryCardProps {
  title: string
  link: string
}

export const CategoryCard = ({ data }: { data: ICategory }) => {
  return (
    <article className="mx-auto">
      <Link
        href={data?.url}
        className="group flex flex-col items-center gap-4 md:h-40 md:w-48 2xl:h-60 2xl:w-60"
      >
        <Image
          src={data?.mainImage}
          alt={data?.name + ' Thumbnail'}
          className="primary-transition h-20 w-20 rounded-lg border-2 border-transparent object-cover group-hover:border-primary 2xl:h-40 2xl:w-40"
        />

        <h2 className="secondary-text primary-transition text-center uppercase text-text-dark group-hover:text-primary">
          {data?.name}
        </h2>
      </Link>
    </article>
  )
}
