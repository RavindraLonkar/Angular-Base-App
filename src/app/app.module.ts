import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppCommonModule } from './modules/app-common/app-common.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

@NgModule({
  declarations: [
     AppComponent,
  ],
  imports: [
    BrowserModule,
    AppCommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
