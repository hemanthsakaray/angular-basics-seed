import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin.module';
import { AppRoutingModule } from './app-routing.module';

//services

//guards

//directives

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminModule, HttpClientModule, AppRoutingModule],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
