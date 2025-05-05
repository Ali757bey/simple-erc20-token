'use client'

import { useState } from 'react'
import { useWriteContract, useAccount } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../lib/contract'
import { parseUnits } from 'ethers'
import { toast } from 'react-hot-toast'

export default function TransferToken() {
    const { isConnected } = useAccount()
    const [recipient, setRecipient] = useState('')
    const [amount, setAmount] = useState('')

    const {
        writeContract,
        isPending,
        isSuccess,
    } = useWriteContract()

    const handleTransfer = async () => {
        if (!recipient || !amount) {
            toast.error('Please fill in all fields.')
            return
        }

        try {
            await writeContract({
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: 'transfer',
                args: [recipient, parseUnits(amount, 18)],
            })
            toast.success('✅ Transfer submitted!')
            setRecipient('')
            setAmount('')
        } catch (err) {
            console.error(err)
            toast.error('❌ Transfer failed. Please check input or wallet.')
        }
    }

    if (!isConnected) return null

    return (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Transfer Tokens</h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Recipient Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Amount"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <button
                onClick={handleTransfer}
                disabled={isPending}
                className={`w-full py-2 px-4 rounded font-semibold text-white transition ${isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
            >
                {isPending ? 'Sending...' : 'Send Tokens'}
            </button>

            {isSuccess && (
                <p className="text-green-600 text-center mt-2">✅ Transfer successful!</p>
            )}
        </div>
    )
}
