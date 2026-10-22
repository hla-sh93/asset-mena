import { Spinner } from '@/components/spinner'

const loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-primaryBg">
      <Spinner className="h-8 w-8" />
    </div>
  )
}

export default loading
