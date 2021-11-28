import { NgModule } from '@angular/core';
import { onestyleComponent } from './onestyle/onestyle.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule,AppRoutingModule],
  declarations: [AppComponent,  onestyleComponent],
  // providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
