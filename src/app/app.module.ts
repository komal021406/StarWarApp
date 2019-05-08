import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpErrorHandlerService } from './http-error-handler.service';
 // Angular material
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatTableModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,    
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpErrorHandlerService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
