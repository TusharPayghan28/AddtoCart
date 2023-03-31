import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { AddcardComponent } from './addcard/addcard.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FilterPipe } from './filter.pipe';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { SearchPipe } from './search.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { GridComponent } from './grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddcardComponent,
    FilterPipe,
    FilterComponent,
    SearchPipe,
    GridComponent,
    DialogComponent,
    RegisterFormComponent,
    PaymentFormComponent,
    Header2Component,
    Header3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterLink,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
