import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MyThemeProvider } from '@/providers/myThemeProvider'
import { ProgressBarProvider } from '@/providers/progressBarProvider'
import { install } from 'resize-observer'

// if you use next.js, use this

if (typeof window !== 'undefined') {
  install()
}

const bahnschrift = localFont({
  src: [
    {
      path: '../public/fonts/BAHNSCHRIFT.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/BAHNSCHRIFT.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/BAHNSCHRIFT.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'ASSET',
  description:
    'A line of modern high-performance X-ray units for inspecting luggage, personal belongings, office equipment, and mail at transportation hubs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      // lang={i18n?.language} dir={i18n?.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <body className={cn(bahnschrift?.className, 'bg-primaryBg')}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <MyThemeProvider>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </MyThemeProvider>
      </body>
    </html>
  )
}
