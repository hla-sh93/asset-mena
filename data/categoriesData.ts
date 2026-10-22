import { ICategory, ICategoryWithProduct } from '@/types'
import {
  BaggageParcelImage,
  DetectorsImage,
  DigitalSystemsImage,
  PerimeterProtectionImage,
  WirelessOpticalImage,
  RescueMedicineImage,
} from '@/public/images'
import { ProductsList } from './productsData'

export const categoriesList: ICategory[] = [
  {
    id: 1,
    url: '/baggage-parcel',
    name: 'Baggage and Parcel',
    mainImage: BaggageParcelImage,
  },
  {
    id: 2,
    url: '/detectors',
    name: 'DETECTORS',
    mainImage: DetectorsImage,
  },
  {
    id: 3,
    url: '/digital-systems-and-installations',
    name: 'DIGITAL SYSTEMS AND INSTALLATIONS',
    mainImage: DigitalSystemsImage,
  },
  {
    id: 4,
    url: '/perimeter-protection',
    name: 'Perimeter Protection',
    mainImage: PerimeterProtectionImage,
  },
  {
    id: 5,
    url: '/rescue-medicine',
    name: 'Rescue Medicine',
    mainImage: RescueMedicineImage,
  },
  {
    id: 6,
    url: '/wireless-optical-communication-systems',
    name: 'WIRELESS OPTICAL COMMUNICATION SYSTEMS',
    mainImage: WirelessOpticalImage,
  },
]

export const categoriesWithProductsData: ICategoryWithProduct[] = [
  {
    name: 'Baggage and parcel',
    url: '/baggage-parcel',
    data: ProductsList?.filter((product) => product?.categoryId === 1),
  },
  {
    name: 'DETECTORS',
    url: '/detectors',
    data: ProductsList?.filter((product) => product?.categoryId === 2),
  },
  {
    name: 'DIGITAL SYSTEMS AND INSTALLATIONS',
    url: '/digital-systems-and-installations',
    data: ProductsList?.filter((product) => product?.categoryId === 3),
  },
  {
    name: 'Perimeter protection',
    url: '/perimeter-protection',
    data: ProductsList?.filter((product) => product?.categoryId === 4),
  },
  {
    name: 'Rescue medicine',
    url: '/rescue-medicine',
    data: ProductsList?.filter((product) => product?.categoryId === 5),
  },
  {
    name: 'WIRELESS OPTICAL COMMUNICATION SYSTEMS',
    url: '/wireless-optical-communication-systems',
    data: ProductsList?.filter((product) => product?.categoryId === 6),
  },
]
