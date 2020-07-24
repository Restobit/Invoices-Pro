import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';


import { ModuleListComponent } from './modules/module-list/module-list.component';
import { InvoiceCreateComponent } from './invoices/invoice-create/invoice-create.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { MergedFunctionsComponent } from './invoices/merged-functions/merged-functions.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModuleListComponent,
    InvoiceCreateComponent,
    InvoiceListComponent,
    MergedFunctionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
