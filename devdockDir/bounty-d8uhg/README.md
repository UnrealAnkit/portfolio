# Code Selling Marketplace

A decentralized marketplace for buying and selling code snippets built on Flow blockchain.

## Features

- List code snippets for sale
- Browse available listings
- Purchase code securely
- Manage your listings

## Setup

1. Install Flow CLI:
```sh
sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"
```

2. Install dependencies:
```sh
cd web
npm install
```

3. Deploy contract:
```sh
flow project deploy
```

4. Start development server:
```sh
npm run dev
```

## Contract Address

The marketplace contract is deployed at: `0x9d2ade18cb6bea1a`

## Usage

1. Connect your Flow wallet
2. Create a listing by providing code details and price
3. Browse available listings
4. Purchase code using FLOW tokens

## Security

- Code hashes are stored on-chain
- Actual code transfer happens off-chain
- Secure payment integration using Flow tokens