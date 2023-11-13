import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { AppComponent } from './app.component';
import { Component01Component } from './component01/component01.component';
import { Component02Component } from './component02/component02.component';
import { Component03Component } from './component03/component03.component';
import { Component04Component } from './component04/component04.component';
import { Component05Component } from './component05/component05.component';
import { Component06Component } from './component06/component06.component';
import { Component07Component } from './component07/component07.component';
import { Component08Component } from './component08/component08.component';
import { Component09Component } from './component09/component09.component';
import { OnPushTesteComponent } from './on-push-teste/on-push-teste.component';
import { Component10Component } from './component10/component10.component';

@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    Component02Component,
    Component03Component,
    Component04Component,
    Component05Component,
    Component06Component,
    Component07Component,
    Component08Component,
    Component09Component,
    OnPushTesteComponent,
    Component10Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
