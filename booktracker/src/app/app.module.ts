import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';
import { SharedModule } from './shared/shared.module';
import { BookLibraryModule } from 'book-library';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LibraryComponent } from './library/library.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { LogUrlInterceptor } from './core/log-url.interceptor';
import { LoggerService } from './core/logger.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LibraryComponent,
    InventoryComponent,
    ActivityLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BooksModule,
    ReadersModule,
    SharedModule,
    BookLibraryModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'BookTracker'
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LogUrlInterceptor, multi: true
    },
  ]
})
export class AppModule { }
