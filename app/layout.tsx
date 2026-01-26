import type { Metadata } from 'next'
import { Poppins, Shadows_Into_Light } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-shadows',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://talawa.ca'),
  title: 'Talawa | Hurricane Melissa Relief - Urgent Support Needed',
  description: 'Support Talawa Youth Development and Educational Alliance in providing Hurricane Melissa relief to Wait-A-Bit Basic School and Wait-A-Bit Primary School in Jamaica. Help us empower Black children and youth through education.',
  keywords: 'Talawa, Hurricane Melissa, Jamaica relief, education charity, Black youth empowerment, Wait-A-Bit School, Canadian charity, Jamaican charity',
  authors: [{ name: 'Talawa Youth Development and Educational Alliance' }],
  openGraph: {
    title: 'Talawa | Hurricane Melissa Relief - Urgent Support Needed',
    description: 'Support Talawa Youth Development and Educational Alliance in providing Hurricane Melissa relief to schools in Jamaica.',
    url: 'https://talawa.ca',
    siteName: 'Talawa',
    images: [
      {
        url: '/images/disasteritems.jpg',
        width: 1200,
        height: 630,
        alt: 'Talawa Hurricane Relief',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talawa | Hurricane Melissa Relief - Urgent Support Needed',
    description: 'Support Talawa Youth Development and Educational Alliance in providing Hurricane Melissa relief.',
    images: ['/images/disasteritems.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${shadowsIntoLight.variable}`}>
      <body className="font-poppins">
        <LoadingScreen />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
