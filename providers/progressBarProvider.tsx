'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export const ProgressBarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#2a2a2c"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  )
}
