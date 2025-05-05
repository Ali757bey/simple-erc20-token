import './globals.css'
import { Inter } from 'next/font/google'
import { WalletProvider } from '../lib/wallet'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blessing Token dApp',
  description: 'A basic ERC-20 wallet-connected interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  )
}
