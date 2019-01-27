import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';

export class MyDataSource extends DataSource<any[]> {
    constructor(
        private subject: BehaviorSubject<any[]>,
        private paginator: MatPaginator,
        public sort: MatSort
    ) {
        super();
    }
    public connect(): Observable<any[]> {
        return this.subject.asObservable();
    }
    public disconnect(): void {}

    public getPaginator() {
        return this.paginator;
    }

    public setPaginator(paginator) {
        this.paginator = paginator;
    }
}

@Injectable({
    providedIn: 'root'
})
export class TableDataService {
    private dataSubject = new BehaviorSubject<any[]>([]);
    public columnsHeaders: string[] = [];
    public columnsHeadersObj: { DISPLAY: string; NAME: string }[] = [];
    public tableDataSource: MyDataSource;
    public paginator: any;
    public sort: any;
    constructor() {}

    public setTableDataSource(tableData): void {
        this.dataSubject.next(tableData);
        this.tableDataSource = new MyDataSource(this.dataSubject, this.paginator, this.sort);
        // this.tableDataSource.sort = this.sort;
    }
}
