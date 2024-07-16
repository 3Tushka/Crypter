import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { initializeCarousel } from 'src/app/functions';

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

  toggleQrCodeScan: boolean = false;

  @ViewChild('tabsContainer') tabsContainer!: ElementRef;
  @ViewChild('nextArrow') nextArrow!: ElementRef;
  @ViewChild('prevArrow') prevArrow!: ElementRef;

  ngAfterViewInit() {
    initializeCarousel(this.tabsContainer, this.nextArrow, this.prevArrow);
  }

  selectNetwork(network: string) {
    this.selectedNetwork = network;
  }

  selectWallet(wallet: Wallet) {
    this.selectedWallet = wallet.name;
  }

  toggleQrCode() {
    this.toggleQrCodeScan = !this.toggleQrCodeScan;
  }

  goToMainPage() {
    this.router.navigate(['/']); // Navigate to the main page
  }
}
