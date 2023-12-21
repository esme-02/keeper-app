import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'The keeper App',
  description: 'Keep all your notes in one place',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <Navbar />
            {children}

            <Footer />
        </body>
    </html>
  )
}