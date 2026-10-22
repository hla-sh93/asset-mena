export const HamburgerBtn = ({
  isNavbarOpen,
  handleNavbarToggle,
  toggleBtnRef,
}: {
  isNavbarOpen: boolean
  handleNavbarToggle: () => void
  toggleBtnRef: any
}) => {
  return (
    <button
      onClick={handleNavbarToggle}
      className="flex flex-col items-center justify-center lg:hidden"
      aria-label="Mobile Navbar trigger button"
      ref={toggleBtnRef}
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-[#141E28] transition-all 
                  duration-300 ease-out dark:bg-text-dark ${
                    isNavbarOpen
                      ? 'translate-y-1 rotate-45'
                      : '-translate-y-0.5'
                  }`}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm 
                  bg-[#141E28] transition-all duration-300 ease-out dark:bg-text-dark ${
                    isNavbarOpen ? 'opacity-0' : 'opacity-100'
                  }`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-[#141E28] transition-all 
                  duration-300 ease-out dark:bg-text-dark ${
                    isNavbarOpen
                      ? '-translate-y-1 -rotate-45'
                      : 'translate-y-0.5'
                  }`}
      ></span>
    </button>
  )
}
