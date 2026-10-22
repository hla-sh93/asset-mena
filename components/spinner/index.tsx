import { cn } from '@/lib/utils'

export const Spinner = ({ className }: { className: string }) => {
  return (
    <div className="flex animate-pulse items-center justify-center gap-1 ease-in-out">
      <span className="sr-only">Loading...</span>
      <div className={cn('rounded-full bg-text-dark', className)}></div>
      <div className={cn('rounded-full bg-text-dark', className)}></div>
      <div className={cn('rounded-full bg-text-dark', className)}></div>
    </div>
  )
}
