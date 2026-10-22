'use client'
import { CategoryCard } from '@/components/category-card'
import { categoriesList } from '@/data'

export const CategoriesSection = () => {
  return (
    <section className="custom-container mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 min-[1150px]:grid-cols-6">
      {categoriesList?.map((category, categoryIndex) => (
        <CategoryCard data={category} key={categoryIndex} />
      ))}
    </section>
  )
}
