import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ArtworkFeatureComponent } from './home/artwork-feature/artwork-feature.component';
import { HomeComponent } from './home/home.component';
import { NftArtistGridComponent } from './home/nft-artist-grid/nft-artist-grid.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NftShowcaseComponent } from './home/nft-showcase/nft-showcase.component';
import { WalletListComponent } from './wallet/wallet-list/wallet-list.component';
import { CollectionGalleryComponent } from './home/collection-gallery/collection-gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SpotlightComponent } from './home/spotlight/spotlight.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { NftCreatedComponent } from './profile/nft-created/nft-created.component';
import { NftFollowersComponent } from './profile/nft-followers/nft-followers.component';
import { MainMenuComponent } from './navbar/main-menu/main-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationComponent } from './settings/notification-activity/notification/notification.component';
import { FormsModule } from '@angular/forms';
import { ActivityComponent } from './settings/notification-activity/activity/activity.component';
import { NotificationActivityComponent } from './settings/notification-activity/notification-activity.component';
import { ProfileSettingsComponent } from './settings/profile-settings/profile-settings.component';
import { WalletSettingsComponent } from './settings/wallet-settings/wallet-settings.component';
import { NotificationSettingsComponent } from './settings/notification-settings/notification-settings.component';
import { DropdownComponent } from './profile/dropdown/dropdown.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DiscoverComponent } from './discover/discover/discover.component';
import { AuctionSliderComponent } from './discover/auction-slider/auction-slider.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtworkFeatureComponent,
    NftArtistGridComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NftShowcaseComponent,
    WalletListComponent,
    CollectionGalleryComponent,
    SpotlightComponent,
    ProfileComponent,
    NftCreatedComponent,
    NftFollowersComponent,
    MainMenuComponent,
    SettingsComponent,
    NotificationComponent,
    ActivityComponent,
    NotificationActivityComponent,
    ProfileSettingsComponent,
    WalletSettingsComponent,
    NotificationSettingsComponent,
    DropdownComponent,
    NewsletterComponent,
    DiscoverComponent,
    AuctionSliderComponent,
    CreateCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
