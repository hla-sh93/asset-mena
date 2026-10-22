import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export const Button = ({
  variant = 'primary',
  fullWidth = false,
  children,
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary'
  fullWidth?: boolean
}) => {
  const getStyle = () => {
    switch (variant) {
      case 'primary':
        return cn(
          'bg-primary uppercase hover:bg-opacity-80', // Default styles
          'text-[var(--primary-bg)]',
        )
    }
  }

  return (
    <button
      {...props}
      className={cn(
        getStyle(),
        fullWidth ? 'w-full' : 'w-fit',
        'primary-transition secondary-text px-6 py-3',
        className,
      )}
    >
      {children}
    </button>
  )
}
