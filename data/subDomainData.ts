import { ISubDomain } from '@/types'
import { ProductsList } from '.'

export const subDomainsData: { field: string; content: ISubDomain[] }[] = [
  {
    field: 'security-transport',
    content: [
      {
        id: 1,
        name: 'Baggage and Parcel',
        fieldId: 1,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 1 && el?.subDomains.includes(1),
            ),
          ),
        ],
      },
      {
        id: 2,
        name: 'People screening',
        fieldId: 1,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 1 && el?.subDomains.includes(2),
            ),
          ),
        ],
      },
      {
        id: 3,
        name: 'Cargo inspection',
        fieldId: 1,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 1 && el?.subDomains.includes(3),
            ),
          ),
        ],
      },
    ],
  },

  {
    field: 'security-customs',
    content: [
      {
        id: 1,
        name: 'Baggage and Parcel',
        fieldId: 2,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 2 && el?.subDomains.includes(1),
            ),
          ),
        ],
      },
      {
        id: 2,
        name: 'People screening',
        fieldId: 2,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 2 && el?.subDomains.includes(2),
            ),
          ),
        ],
      },
      {
        id: 3,
        name: 'Cargo inspection',
        fieldId: 2,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 2 && el?.subDomains.includes(3),
            ),
          ),
        ],
      },
    ],
  },

  {
    field: 'security-law-enforcement-agencies',
    content: [
      {
        id: 1,
        name: 'Baggage and Parcel',
        fieldId: 3,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 3 && el?.subDomains.includes(1),
            ),
          ),
        ],
      },
      {
        id: 2,
        name: 'People screening',
        fieldId: 3,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 3 && el?.subDomains.includes(2),
            ),
          ),
        ],
      },
      {
        id: 3,
        name: 'Cargo inspection',
        fieldId: 3,
        data: [
          ...ProductsList?.filter((product) =>
            product?.subDomainIds.some(
              (el) => el?.fieldId === 3 && el?.subDomains.includes(3),
            ),
          ),
        ],
      },
    ],
  },
]
