import { StaticImageData } from 'next/image'
import { IProduct } from '.'

export interface ICategory {
  id?: number
  name: string
  mainImage: StaticImageData | string
  url: string
}

export interface ICategoryWithProduct {
  name: string
  url: string
  data?: IProduct[]
}
