import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletListComponent } from './wallet/wallet-list/wallet-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'wallet',
    component: WalletListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
