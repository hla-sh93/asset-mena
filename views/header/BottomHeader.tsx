'use client'
// utils
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
// Components
import { Button } from '@/components/button'
import { HamburgerBtn } from '@/components/hamburger-btn'
// images
import {
  LogoDark,
  GrayDownArrowSvgIcon,
  SecondaryDownArrowSvgIcon,
  LogoLight,
} from '@/public/images'
// data
import { navLinks } from '@/data'
import { ProductsMegaMenu } from '.' // Removed FieldOfApplicationsMenu

export const BottomHeader = () => {
  const toggleBtnRef = useRef<any>()
  const navbarRef = useRef<HTMLUListElement>(null)
  const productsMenuRef = useRef<HTMLDivElement>(null)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false)

  useEffect(
    () => setIsProductsMenuOpen(isProductsMenuOpen),
    [isProductsMenuOpen],
  )

  const handleNavbarToggle = () => {
    setIsNavbarOpen((prev) => !prev)
    setIsProductsMenuOpen(false)
  }

  const handleProductsMenuToggle = () => {
    setIsProductsMenuOpen((prev) => !prev)
    if (isNavbarOpen) {
      setIsNavbarOpen(false)
    }
  }

  useEffect(() => {
    const handleBodyClick = (event: MouseEvent) => {
      const navbarElement = navbarRef.current
      const menuElement = productsMenuRef.current
      const navbarToggleButton = toggleBtnRef.current
      if (
        navbarElement &&
        !navbarElement.contains(event.target as Node) &&
        menuElement &&
        !menuElement.contains(event.target as Node) &&
        navbarToggleButton &&
        !navbarToggleButton.contains(event.target as Node)
      ) {
        setIsNavbarOpen(false)
        setIsProductsMenuOpen(false)
      }
    }

    document.body.addEventListener('click', handleBodyClick)

    return () => {
      document.body.removeEventListener('click', handleBodyClick)
    }
  }, [])

  return (
    <div className="relative bg-white py-4 dark:bg-primaryBg">
      <div className="custom-container flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src={LogoDark}
            alt="ASSET Logo"
            width={100}
            height={60}
            loading="eager"
            className="dark:hidden"
          />
          <Image
            src={LogoLight}
            alt="ASSET Logo"
            width={100}
            height={60}
            loading="eager"
            className="hidden dark:inline-block"
          />
        </Link>
        {/* Links */}
        <nav
          className={cn(
            'primary-transition invisible absolute left-0 top-full z-20 w-full -translate-y-0 rounded-lg bg-white opacity-0 shadow-xl ease-out dark:bg-cardBg dark:lg:bg-transparent',
            'lg:visible lg:relative lg:w-2/3 lg:translate-y-0 lg:bg-transparent lg:opacity-100 lg:shadow-none',
            isNavbarOpen && 'visible translate-y-0 opacity-100',
          )}
        >
          <ul
            className={cn(
              'flex flex-col items-center justify-evenly gap-4 py-6', // Adjusted gap
              'lg:flex-row  lg:gap-4 lg:py-0', // Adjusted for smaller gaps
            )}
            ref={navbarRef}
          >
            {navLinks?.map((link, index) =>
              index === 0 ? (
                <li
                  className={cn(
                    'secondary-text primary-transition flex cursor-pointer items-center gap-1 uppercase hover:text-secondary',
                    index === 0 && isProductsMenuOpen
                      ? 'text-secondary'
                      : 'text-text-light',
                  )}
                  key={index}
                  onClick={() => {
                    if (index === 0) {
                      handleProductsMenuToggle()
                    }
                  }}
                >
                  <span>{link?.name}</span>
                  <Image
                    src={
                      index === 0 && isProductsMenuOpen
                        ? SecondaryDownArrowSvgIcon
                        : GrayDownArrowSvgIcon
                    }
                    alt="arrow down"
                    className="h-3 w-3"
                  />
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={link?.link}
                    className={cn(
                      'secondary-text primary-transition uppercase text-text-light hover:text-secondary',
                    )}
                    onClick={() => {
                      setIsNavbarOpen(false)
                      setIsProductsMenuOpen(false)
                    }}
                  >
                    {link?.name}
                  </Link>
                </li>
              ),
            )}
            <li key={10}>
              <Link
                href={'/contact'}
                onClick={() => {
                  setIsNavbarOpen(false)
                  setIsProductsMenuOpen(false)
                }}
                aria-label="Go to contact us page"
              >
                <Button variant="primary" className="lg:hidden">
                  Contact Us
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Contact Us Button */}
        <Link href={'/contact'} aria-label="Go to contact us page">
          <Button variant="primary" className="hidden lg:inline-block">
            Contact Us
          </Button>
        </Link>
        <HamburgerBtn
          isNavbarOpen={isNavbarOpen}
          handleNavbarToggle={handleNavbarToggle}
          toggleBtnRef={toggleBtnRef}
        />
        <div
          ref={productsMenuRef}
          className={cn(
            'primary-transition invisible translate-y-1/2 opacity-0 shadow-2xl',
            isProductsMenuOpen && 'visible translate-y-0 opacity-100',
            'absolute left-[2.5%] top-full z-30 flex w-[95%] flex-col border-t-2 border-t-secondary bg-white shadow-shadowSecondary md:flex-row',
          )}
        >
          <ProductsMegaMenu handleNavbarToggle={handleProductsMenuToggle} />
        </div>
      </div>
    </div>
  )
}
