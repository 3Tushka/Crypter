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
import { NftDiscoverGalleryComponent } from './discover/nft-discover-gallery/nft-discover-gallery.component';
import { HelpComponent } from './help-center/help/help.component';
import { HelpCategoryComponent } from './help-center/help-category/help-category.component';
import { CategoryDetailComponent } from './help-center/category-detail/category-detail.component';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { NftDetailsComponent } from './profile/nft-details/nft-details.component';
import { ModalComponent } from './profile/nft-details/modal/modal.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from './environment/environment';
import { HttpClientModule } from '@angular/common/http';
import { FeedComponent } from './feed/feed.component';

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
    NftDiscoverGalleryComponent,
    HelpComponent,
    HelpCategoryComponent,
    CategoryDetailComponent,
    BlogComponent,
    BlogDetailsComponent,
    NftDetailsComponent,
    ModalComponent,
    FeedComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
