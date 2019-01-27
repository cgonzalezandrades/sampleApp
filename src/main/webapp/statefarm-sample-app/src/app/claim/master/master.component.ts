import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimsService } from '../claims.service';
import { TableDataService } from '../../table-data/table-data.service';
import { MatDialog } from '@angular/material';
import { ClaimDialogComponent } from '../../dialogs/claim-dialog/claim-dialog.component';

@Component({
    selector: 'app-master',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})
export class ClaimMasterComponent implements OnInit {
    claim = {
        id: null,
        subject: '',
        description: '',
        status: null,
        messages: []
    };
    constructor(
        private router: Router,
        private claimsService: ClaimsService,
        private tableDataService: TableDataService,
        private dialog: MatDialog
    ) {}

    public ngOnInit() {
        this.tableDataService.columnsHeaders = ['Id', 'Subject', 'Status'];
        this.tableDataService.columnsHeadersObj = [
            { DISPLAY: 'Id', NAME: 'id' },
            { DISPLAY: 'Subject', NAME: 'subject' },
            { DISPLAY: 'Status', NAME: 'status' }
        ];
        this.getClaims();
    }

    public getClaims() {
        this.claimsService.getTickets().subscribe(
            (response: any) => {
                console.log(response);
                this.tableDataService.setTableDataSource(response);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    public rowClicked(rowData): void {
        console.log(rowData);
        this.claim.id = rowData.id;
        this.claim.subject = rowData.subject;
        this.claim.description = rowData.description;
        this.claim.status = rowData.status;
        this.claim.messages = rowData.messages;

        const dialogRef = this.dialog.open(ClaimDialogComponent, {
            width: '600px',
            height: '400px',
            data: {
                name: 'Update Claim',
                closeDialog: 'Cancel',
                action: 'update',
                buttonText: 'Submit Claim',
                claim: this.claim
            }
        });
    }

    private newTicket() {
        this.claim = {
            id: null,
            subject: '',
            description: '',
            status: 'New',
            messages: []
        };
        const dialogRef = this.dialog.open(ClaimDialogComponent, {
            width: '600px',
            height: '400px',
            data: {
                name: 'New Claim',
                closeDialog: 'Cancel',
                action: 'new',
                buttonText: 'Submit Claim',
                claim: this.claim
            }
        });
    }
}
