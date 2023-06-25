import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import Provider from "@/app/provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo Application',
  description: 'Todo Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
