// Data
import { aboutUsData } from '@/data'
// Components
import { OurValuesCard } from '@/components/our-values-card'

export const AboutUsValues = () => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
      <h3 className="h5-title uppercase text-secondary">
        OUR VALUE TO CUSTOMERS
      </h3>
      {aboutUsData?.values?.map((value, index) => (
        <OurValuesCard data={value} key={index} />
      ))}
    </div>
  )
}
