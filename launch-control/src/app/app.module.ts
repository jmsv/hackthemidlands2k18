import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import MaterialModule from './material-module';
import { ControlComponent, Dialog2FAComponent } from './control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    Dialog2FAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ControlComponent, Dialog2FAComponent]
})
export class AppModule { }
