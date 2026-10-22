import {
  EmailSvgIcon,
  LocationSvgIcon,
  PhoneSvgIcon,
  GrayEmailSvgIcon,
  GrayPhoneSvgIcon,
  GrayLocationSvgIcon,
} from '@/public/images'

export const footerLinks = [
  { text: 'Home', link: '/' },
  { text: 'news & events', link: '/news-events' },
  { text: 'markets', link: '/markets' },
  { text: 'contact', link: '/contact' },
]

export const footerContactData = [
  {
    icon: LocationSvgIcon,
    grayIcon: GrayLocationSvgIcon,
    alt: 'Location Icon',
    text: '2908, Citadel Tower Business Bay, Dubai-UAE.',
  },
  {
    icon: EmailSvgIcon,
    grayIcon: GrayEmailSvgIcon,
    alt: 'Email Icon',
    text: 'info@asset-uae.com',
  },
  {
    icon: PhoneSvgIcon,
    grayIcon: GrayPhoneSvgIcon,
    alt: 'Phone Icon',
    text: '+971 45 763783',
  },
]
