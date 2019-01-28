import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimsService } from '../claims.service';
import { MatDialog } from '@angular/material';
import { ClaimDialogComponent } from '../../dialogs/claim-dialog/claim-dialog.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
    selector: 'app-master',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})
export class ClaimMasterComponent implements OnInit {
    private claim = {
        id: null,
        subject: '',
        description: '',
        status: null,
        messages: []
    };
    private dataSource = new MatTableDataSource();
    @ViewChild(MatSort) private sort: MatSort;
    @ViewChild(MatPaginator) private paginator: MatPaginator;
    private columnsHeaders = ['id', 'subject', 'status'];
    constructor(
        private router: Router,
        private claimsService: ClaimsService,
        private dialog: MatDialog
    ) {}

    public ngOnInit() {
        this.getClaims();
    }

    public getClaims() {
        this.claimsService.getClaims().subscribe(
            (response: any) => {
                this.dataSource = new MatTableDataSource(response);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    public rowClicked(rowData): void {
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
            if (result === 'new') {
                this.claimsService.postClaim(this.claim).subscribe(
                    (response: any) => {
                        this.getClaims();
                    },
                    (error: any) => {
                        console.log(error);
                    }
                );
            } else if (result === 'update') {
                this.claimsService.putClaim(this.claim.id, this.claim).subscribe(
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
