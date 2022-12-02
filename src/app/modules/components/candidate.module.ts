import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateComponent } from './candidate/candidate.component';

const route: Route[] = [
    { path: 'candidate', component: CandidateComponent },
    { path: 'jobs', component: CandidateListComponent },
];

@NgModule({
    declarations: [CandidateComponent, CandidateListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        LayoutModule,
        MatDatepickerModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatSelectModule,
        FuseHighlightModule,
        SharedModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatPaginatorModule,
        NgxExtendedPdfViewerModule,
        MatNativeDateModule,
    ],
})
export class CandidateModule {}
