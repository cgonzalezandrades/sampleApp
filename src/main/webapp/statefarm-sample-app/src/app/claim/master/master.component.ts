import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimsService } from '../claims.service';
import { TableDataService } from '../../table-data/table-data.service';
import { MatDialog } from '@angular/material';
import { ClaimDialogComponent } from '../../dialogs/claim-dialog/claim-dialog.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

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
    dataSource = new MatTableDataSource();
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    columnsHeaders = ['id', 'subject', 'status'];
    // columnsHeadersObj = [
    //         { DISPLAY: 'Id', NAME: 'id' },
    //         { DISPLAY: 'Subject', NAME: 'subject' },
    //         { DISPLAY: 'Status', NAME: 'status' }
    //     ];
    constructor(
        private router: Router,
        private claimsService: ClaimsService,
        private tableDataService: TableDataService,
        private dialog: MatDialog
    ) {}

    public ngOnInit() {
        this.getClaims();
    }

    public getClaims() {
        this.claimsService.getClaims().subscribe(
            (response: any) => {
                console.log(response);
                //           this.tableDataService.columnsHeaders = ['Id', 'Subject', 'Status'];
                // this.tableDataService.columnsHeadersObj = [
                //     { DISPLAY: 'Id', NAME: 'id' },
                //     { DISPLAY: 'Subject', NAME: 'subject' },
                //     { DISPLAY: 'Status', NAME: 'status' }
                // ];

                this.dataSource = new MatTableDataSource(response);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                // this.tableDataService.setTableDataSource(response);
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
            width: '900px',
            height: '800px',
            data: {
                name: 'Update Claim',
                closeDialog: 'Cancel',
                action: 'update',
                buttonText: 'Update Claim',
                claim: this.claim
            }
        });
        this.dialogEvent(dialogRef);
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

        this.dialogEvent(dialogRef);
    }

    private dialogEvent(dialogRef) {
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result === 'new') {
                this.claimsService.saveNewClaim(this.claim).subscribe(
                    (response: any) => {
                        this.getClaims();
                    },
                    (error: any) => {
                        console.log(error);
                    }
                );
            } else if (result === 'update') {
                this.claimsService.updateClaim(this.claim.id, this.claim).subscribe(
                    (response: any) => {
                        this.getClaims();
                    },
                    (error: any) => {
                        console.log(error);
                    }
                );
            }
        });
    }

    // highlight row when hovered with mouse
    public rowHovered(element, action) {
        if (action === 'enter') {
            element.parentElement.style.background = '#f4f4f4';
        } else {
            element.parentElement.style.background = 'white';
        }
    }
}
