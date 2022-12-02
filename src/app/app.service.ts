import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CandidateService {

    constructor(private http: HttpClient) { }

    getCandidateJobList(pageIndex: number, pageSize: number, searchText: string, sortBy: string, sortOrder: number): Observable<any> {
        let url = environment.endpoint + '/candidate?PageNumber=' + pageIndex + '&PageSize=' + pageSize;
        if (sortBy) {
            url += '&SortBy=' + sortBy;
        }
        if (sortOrder >= 0) {
            url += '&SortOrder=' + sortOrder;
        }
        if (searchText) {
            url += '&SearchText=' + searchText;
        }
        return this.http.get(url);
    }

    saveCandidate(data: any): Observable<any> {
        return this.http.post(environment.endpoint + '/candidate', data);
    }

    deleteCandidate(id: number): Observable<any> {
        return this.http.delete(environment.endpoint + '/candidate/' + id);
    }
}
