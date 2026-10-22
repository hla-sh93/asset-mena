'use client'
import { fieldsOfApplicationsData } from '@/data'
import Link from 'next/link'

export const FieldOfApplicationsMenu = ({ handleNavbarToggle }: any) => {
  return (
    <ul className="bg-primaryBg flex flex-col gap-4 px-7 py-6">
      {fieldsOfApplicationsData?.map((field, index) => (
        <li key={field?.id}>
          <Link
            href={`/field-of-applications?field=${field?.url}`}
            className="body-text primary-transition text-text-dark hover:text-text-light"
            onClick={() => {
              handleNavbarToggle()
            }}
          >
            {field?.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
