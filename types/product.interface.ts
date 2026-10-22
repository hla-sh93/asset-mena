import { StaticImageData } from 'next/image'

export interface IProductCard {
  id?: number
  name: string
  mainImage: StaticImageData | string
  url: string
}

export interface IProduct extends IProductCard {
  fullName?: string
  categoryId: number
  listOfImages: (string | StaticImageData)[]
  description: string | TrustedHTML
  specialNotes: string[]
  data?: {
    title: string
    data: { label?: string; value?: string; small?: string; big?: string }[]
  }[]
  tableData?: {
    title: string
    values: Array<string[]>
  }[]
  fieldOfApplicationId: number[]
  subDomainIds: {
    fieldId: number
    subDomains: number[]
  }[]
}
