import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleListComponent } from './modules/module-list/module-list.component';
import { InvoiceCreateComponent } from './invoices/invoice-create/invoice-create.component';
import { MergedFunctionsComponent } from './invoices/merged-functions/merged-functions.component';


const routes: Routes = [
  { path: '', component: ModuleListComponent },
  { path: 'create', component: MergedFunctionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
