import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { MiniChessComponent } from './mini-chess/mini-chess.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniChessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
