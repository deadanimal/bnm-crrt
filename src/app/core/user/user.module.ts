import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule 
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ReportComponent,
    AnalyticsComponent,
    BankDetailComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
