'use client'

import { topHeaderData } from '@/data'
import Image from 'next/image'
import { ThemeSwitcher } from '@/components/theme-switcher'

export const TopHeader = () => {
  return (
    <div className="bg-headerFooterGradient py-3">
      <div className="custom-container flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          {topHeaderData?.map((item, index) => (
            <a
              href={item?.link}
              target="_blank"
              key={index}
              className="flex items-end gap-2"
            >
              <Image
                src={item?.icon}
                alt={item?.alt + ' Icon'}
                width={20}
                height={20}
                className="aspect-square"
                loading="eager"
              />
              <span
                className="secondary-text text-white"
                dir={item?.alt === 'Phone' ? 'ltr' : ''}
              >
                {item?.text}
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          {/* <Image
            src={SunIcon}
            alt="theme icon"
            loading="eager"
            className="h-6 w-6 cursor-pointer text-text-light"
            onClick={toggleTheme}
          /> */}
          {/* <Image
            src={MoonIcon}
            alt="theme icon"
            loading="eager"
            className="hidden h-6 w-6 cursor-pointer text-text-light dark:inline-block"
            onClick={toggleTheme}
          /> */}
          {/* <span className="secondary-text text-white">|</span> */}
          {/* <span
            className="secondary-text text-text-light"
            // onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </span>
          <span className="secondary-text text-white">|</span>
          <span
            className="secondary-text text-text-light"
            // onClick={() => i18n.changeLanguage('ar')}/
          >
            AR
          </span> */}
        </div>
      </div>
    </div>
  )
}
