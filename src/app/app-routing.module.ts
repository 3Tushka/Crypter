import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WalletListComponent } from './wallet/wallet-list/wallet-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { MainMenuComponent } from './navbar/main-menu/main-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { DiscoverComponent } from './discover/discover/discover.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';
import { HelpComponent } from './help-center/help/help.component';
import { HelpCategoryComponent } from './help-center/help-category/help-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'wallet',
    component: WalletListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'main-menu',
    component: MainMenuComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'collection',
    component: CreateCollectionComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'category',
    component: HelpCategoryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
