import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from 'app/app.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-candidate',
    templateUrl: './candidate.component.html',
    styleUrls: ['./candidate.component.scss']
})

export class CandidateComponent implements OnInit {
    pdfFile: string;
    pdfFileName: string;
    candidateForm: UntypedFormGroup;
    selectedJobId: any = 1;
    imageSrc: any;
    isTrue: boolean = false;
    minDate = new Date(1980, 0, 1);
    maxDate = new Date(new Date().getFullYear() - 18, 0, 1);
    control = new FormControl(new Date(1990, 0, 1));
    form = new FormGroup({date: this.control});
    searchText = '';

    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _candidateService: CandidateService,
        private _router: Router) { }

    ngOnInit(): void {
        this.candidateForm = this._formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required,Validators.email]],
            date: ['', [Validators.required]],
            birth: ['', [Validators.required, Validators.min, Validators.max]],
            pdf: ['', [Validators.required]]
        });
    }

    onFileSelected(e): void {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        this.pdfFileName = file.name;
        const pattern = /pdf-*/;
        const reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this.handleFileLoaded.bind(this);
        reader.readAsDataURL(file);
    }

    handleFileLoaded(e): void {
        const reader = e.target;
        this.pdfFile = reader.result;
        this.imageSrc = reader.result.split(',')[1];
    };

    saveCandidateDetail(): void {
        if (this.candidateForm.invalid) {
            return;
        }

        const detail = {
            name: this.candidateForm.value['name'],
            email: this.candidateForm.value['email'],
            dateOfBirth: this.candidateForm.value['date'],
            placeOfBirth: this.candidateForm.value['birth'],
            jobId: this.selectedJobId,
            resume: this.pdfFile
        };

        this._candidateService.saveCandidate(detail).subscribe((res: any) => {
            if (res && res.success) {
                this._router.navigate(['/jobs']);
            } else {
                alert(res.messsage);
            }
        });
    };

    selectJob(event: any): void {
        this.selectedJobId = event.target.value;
    };

    deletePdfFile(): void {
        this.pdfFile = '';
        this.pdfFileName = '';
    }
}
