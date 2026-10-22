interface IPageTitleProps {
  name: string | undefined
  title: string | undefined
}

export const PageTitle = ({ name, title }: IPageTitleProps) => {
  return (
    <>
      <p className="secondary-text text-center uppercase text-text-light">
        {name}
      </p>
      <h1 className="h3-title mx-auto mt-5 max-w-prose text-center font-semibold capitalize text-primary">
        {title}
      </h1>
    </>
  )
}
