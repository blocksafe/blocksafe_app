// Wallet connection utilities
window.WalletConnector = {
  // Check if MetaMask is installed
  isMetaMaskInstalled: () => typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask,

  // Connect to MetaMask wallet
  connectMetaMask: async function () {
    try {
      if (!this.isMetaMaskInstalled()) {
        throw new Error("MetaMask is not installed. Please install MetaMask to continue.")
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts.length === 0) {
        throw new Error("No accounts found. Please make sure MetaMask is unlocked.")
      }

      // Get network information
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      })

      return {
        success: true,
        address: accounts[0],
        chainId: chainId,
        provider: "MetaMask",
      }
    } catch (error) {
      console.error("MetaMask connection error:", error)
      return {
        success: false,
        error: error.message,
      }
    }
  },

  // Get current account if already connected
  getCurrentAccount: async function () {
    try {
      if (!this.isMetaMaskInstalled()) {
        return null
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      })

      return accounts.length > 0 ? accounts[0] : null
    } catch (error) {
      console.error("Error getting current account:", error)
      return null
    }
  },

  // Disconnect wallet (clear local state)
  disconnect: () => {
    // Note: MetaMask doesn't have a programmatic disconnect
    // This just clears our local state
    return {
      success: true,
      message: "Wallet disconnected locally",
    }
  },

  // Listen for account changes
  onAccountsChanged: function (callback) {
    if (this.isMetaMaskInstalled()) {
      window.ethereum.on("accountsChanged", callback)
    }
  },

  // Listen for network changes
  onChainChanged: function (callback) {
    if (this.isMetaMaskInstalled()) {
      window.ethereum.on("chainChanged", callback)
    }
  },
}

// Auto-detect wallet connection on page load
window.addEventListener("load", async () => {
  if (window.WalletConnector.isMetaMaskInstalled()) {
    const currentAccount = await window.WalletConnector.getCurrentAccount()
    if (currentAccount) {
      console.log("Wallet already connected:", currentAccount)
      // Dispatch custom event for React component to listen
      window.dispatchEvent(
        new CustomEvent("walletAutoConnected", {
          detail: { address: currentAccount },
        }),
      )
    }
  }
})
