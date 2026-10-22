import Image from 'next/image'
import { cn } from '@/lib/utils'
// Data
import { footerContactData } from '@/data'

export const FooterContactData = ({
  className,
  isFooter = true,
}: {
  className?: string
  isFooter?: boolean
}) => {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {footerContactData?.map((item, itemIndex) => (
        <div key={itemIndex} className="flex items-center gap-2">
          <Image
            src={isFooter ? item?.icon : item?.grayIcon}
            alt={item?.alt}
            width={20}
            height={20}
            className="aspect-square"
            loading="eager"
          />
          <span
            className={cn(
              'secondary-text',
              isFooter ? 'text-white' : 'text-text-dark',
            )}
            dir={item?.alt === 'Phone Icon' ? 'ltr' : ''}
          >
            {item?.text}
          </span>
        </div>
      ))}
    </div>
  )
}
