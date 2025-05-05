'use client'

import { useState } from 'react'
import { useWriteContract, useAccount } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../lib/contract'
import { parseUnits } from 'ethers'

export default function TransferToken() {
    const { address, isConnected } = useAccount()
    const [recipient, setRecipient] = useState('')
    const [amount, setAmount] = useState('')

    const { writeContract, isPending, isSuccess } = useWriteContract()

    const handleTransfer = () => {
        if (!recipient || !amount) return

        writeContract({
            address: CONTRACT_ADDRESS,
            abi: CONTRACT_ABI,
            functionName: 'transfer',
            args: [recipient, parseUnits(amount, 18)], // adjust for decimals
        })
    }

    if (!isConnected) return null

    return (
        <div className="mt-6 bg-gray-100 p-4 rounded w-full max-w-md">
            <h2 className="text-lg font-semibold mb-2">Transfer Tokens</h2>

            <input
                type="text"
                placeholder="Recipient Address"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />

            <input
                type="text"
                placeholder="Amount"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <button
                onClick={handleTransfer}
                disabled={isPending}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
                {isPending ? 'Sending...' : 'Send Tokens'}
            </button>

            {isSuccess && (
                <p className="text-green-600 mt-2">✅ Transfer successful!</p>
            )}
        </div>
    )
}
