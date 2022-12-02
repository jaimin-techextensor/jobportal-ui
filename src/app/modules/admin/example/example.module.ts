import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
// import { CandidateComponent } from 'app/modules/components/candidate/candidate.component';
import { SharedModule } from 'app/shared/shared.module';
const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent
    },
    // {
    //     path: 'candidate',
    //     component: CandidateComponent
    // }
];

@NgModule({
    declarations: [
        ExampleComponent,
        // CandidateComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        // MatIconModule,
        // LayoutModule,
        // MatButtonToggleModule,
        // MatChipsModule,
        // MatDatepickerModule,
        // MatDividerModule,
        // MatFormFieldModule,
        // MatIconModule,
        // MatInputModule,
        // MatMenuModule,
        // MatMomentDateModule,
        // MatSelectModule,
        // FuseHighlightModule,
        // SharedModule,
    ]
})
export class ExampleModule {
}
