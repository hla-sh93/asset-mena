'use client'

import { useRef, useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { cn } from '@/lib/utils'

export const PageWithTransition = ({
  Component,
  pageProps,
  router,
}: AppProps) => {
  const last = useRef(Component)

  const [transitioning, setTransitioning] = useState(false)
  useEffect(() => {
    const handler = () => {
      setTransitioning(true)
      setTimeout(() => {
        last.current = Component
        setTransitioning(false)
      }, 280)
    }

    router.events.on('routeChangeComplete', handler)

    return () => {
      router.events.off('routeChangeComplete', handler)
    }
  }, [Component])

  const Screen = !transitioning ? Component : last.current

  return (
    <div
      className={cn(
        transitioning ? 'animate-slideUpLeave' : 'animate-slideUpEnter',
      )}
    >
      <Screen {...pageProps} />
    </div>
  )
}
