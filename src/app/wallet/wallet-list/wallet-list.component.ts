import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Wallet {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss'],
})
export class WalletListComponent {
  constructor(private router: Router) {}

  networks = ['Ethereum', 'Flow', 'Solana', 'Polygon'];
  wallets: Wallet[] = [
    { name: 'MetaMask', icon: '../../../assets/icons/wallet-fox.svg' },
    { name: 'WalletConnect', icon: '../../../assets/icons/wallet-connect.svg' },
    {
      name: 'Coinbase Wallet',
      icon: '../../../assets/icons/Coinbase-dapp-wallet-logo.svg',
    },
    { name: 'MyEtherWallet', icon: '../../../assets/icons/wallet-ether.svg' },
  ];
  selectedNetwork = 'Ethereum';
  selectedWallet = '';

  selectNetwork(network: string) {
    this.selectedNetwork = network;
  }

  selectWallet(wallet: Wallet) {
    this.selectedWallet = wallet.name;
  }

  goToMainPage() {
    this.router.navigate(['/']); // Navigate to the main page
  }
}
