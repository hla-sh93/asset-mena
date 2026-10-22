import Image from 'next/image'

interface IOurValuesCardProps {
  title: string
  desc: string
  image: string
}

export const OurValuesCard = ({ data }: { data: IOurValuesCardProps }) => {
  return (
    <article className="primary-transition group relative border-2 border-transparent p-4 pt-5 hover:border-primary hover:bg-white/50 dark:bg-cardBg dark:hover:bg-cardBg">
      <h4 className="h4-title text-primary">{data?.title}</h4>
      <p className="secondary-text mt-3 text-text-dark">{data?.desc}</p>
      <div className="absolute right-5 top-[-1.45rem] w-fit rotate-45 bg-primary p-3 group-hover:animate-rotate dark:bg-slate-700">
        <Image
          src={data?.image}
          alt={data?.title}
          width={20}
          height={20}
          className="-rotate-45"
        />
      </div>
    </article>
  )
}
