import { AccountingMastersRoutingModule } from '../accounting-masters/accounting-masters-routing.module';
import { LedgerMasterComponent } from '../accounting-masters/components/ledger-master/ledger-master.component';
import { VoucherMasterComponent } from '../accounting-masters/components/voucher-master/voucher-master.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppCommonComponent } from './app-common.component';
import { AppCommonRoutingModule } from './/app-common-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonRoutingModule,
    AccountingMastersRoutingModule
  ],
  declarations: [
    AppCommonComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    DashboardComponent,
    LedgerMasterComponent,
    VoucherMasterComponent
  ],
  exports: [
    AppCommonComponent,
  ]
})
export class AppCommonModule { }
