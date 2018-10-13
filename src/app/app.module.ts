import { MaterialModule } from './material/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MaterialComponent } from './material/material.component';
import { TodoOneComponent } from './todo-one/todo-one.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidebarComponent,
    DynamicFormQuestionComponent,
    MessagesComponent,
    HeroSearchComponent,
    MaterialComponent,
    TodoOneComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0, passThruUnknownUrl: true }
    ),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
