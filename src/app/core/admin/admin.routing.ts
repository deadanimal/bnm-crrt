import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { RiskCreateComponent } from './risk-create/risk-create.component';
import { RiskReportComponent } from './risk-report/risk-report.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { InstitutionComponent } from './institution/institution.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'bank-detail',
                component: BankDetailComponent
            },
            {
                path: 'risk-management',
                children: [
                    {
                        path: 'create',
                        component: RiskCreateComponent
                    },
                    {
                        path: 'report',
                        component: RiskReportComponent
                    }
                ]
            },
            {
                path: 'audit-trail',
                component: AuditTrailComponent
            },
            {
                path: 'institution',
                component: InstitutionComponent
            }
        ]
    }
]