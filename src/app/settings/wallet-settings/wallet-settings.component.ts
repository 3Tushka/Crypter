import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet-settings',
  templateUrl: './wallet-settings.component.html',
  styleUrls: ['./wallet-settings.component.scss'],
})
export class WalletSettingsComponent {
  constructor() {}

  refreshWallet() {
    console.log('Refreshing wallet information...');
    // Add logic to refresh wallet info
  }

  linkWallet() {
    console.log('Linking wallet...');
    // Add logic to link wallet
  }
}
