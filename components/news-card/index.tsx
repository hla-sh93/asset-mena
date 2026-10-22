import { DateSvgIcon } from '@/public/images'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface INewsCardProps {
  title: string
  body: string
  date: string
  image: StaticImageData
  link: string
}

export const NewsCard = ({ data }: { data: INewsCardProps }) => {
  return (
    <article className="primary-transition overflow-hidden rounded-lg bg-cardBg shadow-lg hover:shadow-shadow1 dark:bg-cardBg">
      <Link href={data.link} className="flex h-full flex-col">
        <Image
          src={data.image}
          alt={`${data.title} thumbnail`}
          className="h-48 w-full object-cover"
          width={400}
          height={300}
        />
        <div className="flex flex-grow flex-col justify-between p-6">
          <h2 className="h6-title text-primary dark:text-primary">
            {data.title}
          </h2>
          <p className="body-text mt-2 line-clamp-2 text-sm text-text-dark dark:text-text-light">
            {data.body}
          </p>
          <div className="mt-4 flex items-center text-secondary">
            <Image src={DateSvgIcon} alt="Date Icon" width={18} height={18} />
            <span className="text-secondary-text ml-2">{data.date}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
