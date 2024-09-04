import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'docq - Create Account',
  description: 'Start your journey to better health with docq',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar/>
        {children}
        <Footer/>

        </body>
    </html>
  )
}