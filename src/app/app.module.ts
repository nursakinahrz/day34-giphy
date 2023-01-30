import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form.component';
import { GiphyComponent } from './components/giphy.component';
import { HttpClientModule } from '@angular/common/http';
import { GiphyService } from './giphy-service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
