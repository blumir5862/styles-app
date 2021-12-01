import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { onestyleComponent } from './onestyle/onestyle.component';
import { twostyleComponent } from './twostyle/twostyle.component';
import { threestyleComponent } from './threestyle/threestyle.component';
import { fourstyleComponent } from './fourstyle/fourstyle.component';
import { fivestyleComponent } from './fivestyle/fivestyle.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule,AppRoutingModule, NgbModule],
  declarations: [AppComponent,  onestyleComponent, twostyleComponent, threestyleComponent, fourstyleComponent, fivestyleComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
export class CustomModule { }