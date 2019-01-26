import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAuthorComponent,
    ShowAuthorComponent,
    AllAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
