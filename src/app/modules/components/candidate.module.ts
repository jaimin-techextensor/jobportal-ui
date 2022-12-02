import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

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
        NgxExtendedPdfViewerModule
    ]
})
export class CandidateModule { }
