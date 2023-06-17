import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompoundsDetailPageComponent } from './compounds-detail-page/compounds-detail-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { EditPageFormComponent } from './edit-page-form/edit-page-form.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CompoundsDetailPageComponent,
    EditPageComponent,
    EditPageFormComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
