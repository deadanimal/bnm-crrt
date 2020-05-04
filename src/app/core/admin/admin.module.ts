import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  BsDatepickerModule,
  ModalModule,
  AccordionModule,
  TabsModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as mapbox from 'mapbox-gl';
(mapbox as any).accessToken = environment.mapbox.accessToken

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ManagementComponent } from './management/management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { RiskCreateComponent } from './risk-create/risk-create.component';
import { RiskReportComponent } from './risk-report/risk-report.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { InstitutionComponent } from './institution/institution.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    AnalyticsComponent,
    ReportComponent,
    ProfileComponent,
    SettingsComponent,
    BankDetailComponent,
    RiskCreateComponent,
    RiskReportComponent,
    AuditTrailComponent,
    InstitutionComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    HttpClientModule,
    LeafletModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot()
  ]
})
export class AdminModule { }
