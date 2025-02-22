import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { AddSongComponent } from './add-song/add-song.component';
import { FormsModule } from '@angular/forms';
import { UpdateSongComponent } from './update-song/update-song.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParAlbumComponent } from './recherche-par-album/recherche-par-album.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeAlbumsComponent } from './liste-albums/liste-albums.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    AddSongComponent,
    UpdateSongComponent,
    RechercheParAlbumComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeAlbumsComponent,
    UpdateAlbumComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
