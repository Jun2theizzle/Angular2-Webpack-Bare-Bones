import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
 * Platform and Environment providers/directives/pipes
 */
// App is our top level component
import { App } from './app.component';



/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule
  ]
})
export class AppModule {



}

