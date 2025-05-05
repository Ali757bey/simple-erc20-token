// src/lib/wallet.ts

'use client'

import '@rainbow-me/rainbowkit/styles.css'
import {
    getDefaultConfig,
    RainbowKitProvider
} from '@rainbow-me/rainbowkit'
import { sepolia } from 'wagmi/chains'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

// This config connects to Sepolia via WalletConnect with demo ID
const config = getDefaultConfig({
    appName: 'Blessing Token dApp',
    projectId: 'demo', // Optional: use your WalletConnect ID
    chains: [sepolia],
    ssr: true
})

// Create a new instance of the query client (used by RainbowKit)
const queryClient = new QueryClient()

// WalletProvider wraps your app in the RainbowKit + Wagmi providers
export function WalletProvider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config= { config } >
        <QueryClientProvider client={ queryClient }>
            <RainbowKitProvider>
            { children }
            </RainbowKitProvider>
            </QueryClientProvider>
            </WagmiProvider>
    )
}

