import { LedgerMasterComponent } from './components/ledger-master/ledger-master.component';
import { VoucherMasterComponent } from './components/voucher-master/voucher-master.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const accountingMastersRoutes: Routes = [
  { path : 'ledger-master', component : LedgerMasterComponent },
  { path : 'voucher-master', component : VoucherMasterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountingMastersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountingMastersRoutingModule { }
