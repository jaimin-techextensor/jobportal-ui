export class RequestModel {
    public pageNumber: number = 0;
    public pageSize: number = 10;
    public totalPages: number = 1;
    public totalCount: number = 10;
    public searchText: string = '';
    public sortBy?: string = 'Active';
    public sortOrder = 0;
}
