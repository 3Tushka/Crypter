import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ArtworkFeatureComponent } from './artwork-feature/artwork-feature.component';
import { HomeComponent } from './home/home.component';
import { NftArtistCardComponent } from './nft-artist-card/nft-artist-card.component';
import { NftArtistGridComponent } from './nft-artist-grid/nft-artist-grid.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtworkFeatureComponent,
    NftArtistGridComponent,
    NftArtistCardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
