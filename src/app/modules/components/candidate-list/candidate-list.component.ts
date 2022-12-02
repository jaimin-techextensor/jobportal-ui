import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateService } from 'app/app.service';
import { RequestModel } from '../candidate';

@Component({
    selector: 'app-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss']
})


export class CandidateListComponent implements OnInit {
    @ViewChild('pdfViewer')
    public pdfViewer;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns = ['JobId', 'Name', 'Email', 'PlaceOfBirth', 'DateOfBirth', 'Action'];
    jobList: any = [];
    request: RequestModel = new RequestModel();
    dataSource: any;
    hidePdf = false;
    pdfFile: any;
    searchText = '';
    constructor(
        public dialog: MatDialog,
        private _appService: CandidateService) {
    }

    ngOnInit(): void {
        this.getCandidateJobsList(null);
    }

    getCandidateJobsList(event, isSearch = false): void {
        this.request.pageSize = event?.pageSize ? event.pageSize : this.request.pageSize;
        this.request.pageNumber = event?.pageIndex >= 0 ? (event.pageIndex + 1) : this.request.pageNumber;
        this.request.sortBy = event?.active ? event.active : 'Name';
        this.request.sortOrder = event?.direction ? (event.direction === 'asc' ? 0 : 1) : 0;
        if (isSearch) {
            if (this.searchText.length > 0 && this.searchText.length <= 2) {
                return;
            } else {
                this.request.searchText = this.searchText ? this.searchText : null;
            }
        }
        else {
            this.request.searchText = null;
        }
        this._appService.getCandidateJobList(this.request.pageNumber, this.request.pageSize, this.request.searchText, this.request.sortBy, this.request.sortOrder)
            .subscribe((res: any) => {
                this.jobList = res;
                this.jobList.forEach((job: any) => {
                    switch (job.jobId) {
                        case 1:
                            job.jobId = 'Full Stack Developer';
                            break;
                        case 2:
                            job.jobId = 'Front End Developer';
                            break;
                        case 3:
                            job.jobId = 'Back End Developer';
                            break;
                        case 4:
                            job.jobId = 'SQL Developer';
                            break;
                        default:
                            break;
                    };
                });
                this.dataSource = new MatTableDataSource(this.jobList);
            });
    }

    deleteCandidate(candidateId: number): void {
        this._appService.deleteCandidate(candidateId).subscribe((res: any) => {
            if (res && res.success) {
                const index = this.jobList.findIndex(a => a.id === candidateId);
                this.jobList.splice(index, 1);
                this.dataSource = new MatTableDataSource(this.jobList);
            }
        });
    }

    openPdf(src: any): void {
        this.pdfFile = src;
        this.hidePdf = true;
    }
}
