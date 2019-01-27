import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketsService } from '../tickets.service';
import { TableDataService } from '../../table-data/table-data.service';
@Component({
    selector: 'app-master',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})
export class TicketMasterComponent implements OnInit {
    constructor(
        private router: Router,
        private ticketsService: TicketsService,
        private tableDataService: TableDataService
    ) {}

    public ngOnInit() {
        this.tableDataService.columnsHeaders = ['Id', 'Subject', 'Description', 'Status'];
        this.tableDataService.columnsHeadersObj = [
            { DISPLAY: 'Id', NAME: 'id' },
            { DISPLAY: 'Subject', NAME: 'subject' },
            { DISPLAY: 'Description', NAME: 'description' },
            { DISPLAY: 'Status', NAME: 'status' }
        ];
        this.ticketsService.getTickets().subscribe(
            (response: any) => {
                console.log(response);
                this.tableDataService.setTableDataSource(response);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    public newTicket() {
        this.router.navigate(['/tickets/detail']);
    }

    public rowClicked(rowData): void {
        console.log(rowData);
    }
}
