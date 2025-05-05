'use client'

import { useReadContract } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../lib/contract'
import { formatUnits } from 'ethers'
import { useAccount } from 'wagmi'
import TransferToken from '../components/TransferToken'

export default function Home() {
  const { data: tokenName, isLoading } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'name',
  })

  const { data: tokenSymbol } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'symbol',
  })

  const { data: totalSupply } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'totalSupply',
  }) as { data: bigint }

  const { address, isConnected } = useAccount()

  const { data: balance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'balanceOf',
    args: [address!],
  }) as { data: bigint }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-white">
      <h1 className="text-3xl font-bold mb-2">Blessing Token dApp</h1>

      <p className="mb-1 text-gray-600">
        Token Name: {isLoading ? 'Loading...' : String(tokenName)}
      </p>
      <p className="mb-1 text-gray-600">
        Symbol: {String(tokenSymbol)}
      </p>
      <p className="mb-6 text-gray-600">
        Total Supply: {totalSupply ? formatUnits(totalSupply, 18) : '...'}
      </p>

      {isConnected && (
        <p className="mb-6 text-gray-600">
          Your Balance: {balance ? formatUnits(balance, 18) : '...'} BLSS
        </p>
      )}

      {!isConnected && (
        <p className="mb-4 text-gray-500">
          Connect your wallet to see your BLSS balance.
        </p>
      )}

      <ConnectButton />
      <TransferToken />
    </main>
  )
}
