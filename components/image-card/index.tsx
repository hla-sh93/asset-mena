import Image from 'next/image'

interface IImageCard {
  link: string
  image: string
  alt: string
  className?: string
}

export const ImageCard = ({ data }: { data: IImageCard }) => {
  return (
    <a href={data?.link}>
      <article className="primary-transition flex items-center justify-center border-2 border-transparent bg-white px-8 py-10 hover:border-primary dark:bg-cardBg">
        <Image
          src={data?.image}
          alt={data?.alt}
          className="h-24 w-52 2xl:h-36 2xl:w-64"
        />
      </article>
    </a>
  )
}
