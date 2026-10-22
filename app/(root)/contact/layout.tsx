import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | ASSET',
  description:
    'A line of modern high-performance X-ray units for inspecting luggage, personal belongings, office equipment, and mail at transportation hubs',
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default layout
