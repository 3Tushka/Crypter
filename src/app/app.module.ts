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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
