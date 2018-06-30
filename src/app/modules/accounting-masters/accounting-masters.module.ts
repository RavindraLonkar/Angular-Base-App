import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerMasterComponent } from './components/ledger-master/ledger-master.component';
import { VoucherMasterComponent } from './components/voucher-master/voucher-master.component';
import { AccountingMastersRoutingModule } from './/accounting-masters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountingMastersRoutingModule
  ],
  declarations: [
    LedgerMasterComponent,
    VoucherMasterComponent,
  ],
  exports : [
    LedgerMasterComponent,
    VoucherMasterComponent,
  ],
  providers : [
  ]
})
export class AccountingMastersModule { }
