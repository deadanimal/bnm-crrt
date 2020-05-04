import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'bank-detail',
                component: BankDetailComponent
            }
        ]
    }
]