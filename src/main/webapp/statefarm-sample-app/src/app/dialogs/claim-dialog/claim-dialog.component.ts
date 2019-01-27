import { AfterViewInit, Component, Inject, AfterContentChecked } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ClaimsService } from '../../claim/claims.service';
import { TableDataService } from '../../table-data/table-data.service';
@Component({
    selector: 'app-claim-dialog',
    templateUrl: './claim-dialog.component.html',
    styleUrls: ['./claim-dialog.component.css']
})
export class ClaimDialogComponent implements AfterContentChecked {
    claim: any;
    public newMessage: String;
    statuses = ['New', 'Open', 'Pending', 'Resolved'];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ClaimDialogComponent>,
        private claimsService: ClaimsService,
        private tableDataService: TableDataService
    ) {}

    public ngAfterContentChecked() {
        this.claim = this.data.claim;
    }

    public onNoClick(): void {
        this.dialogRef.close('cancel');
    }

    public dialogAction(action) {
        if (action === 'new') {
            console.log('new');
            this.claimsService.saveNewClaim(this.claim).subscribe(
                (response: any) => {
                    this.claimsService.getTickets().subscribe(
                        (response: any) => {
                            console.log(response);
                            // this.tableDataService.setTableDataSource(response);
                        },
                        (error: any) => {
                            console.log(error);
                        }
                    );
                },
                (error: any) => {
                    console.log(error);
                }
            );
        } else {
            this.updateClaim();
        }
    }

    public postMessage() {
        this.claim.messages.push(this.newMessage);
        this.updateClaim();
    }

    private updateClaim() {
        this.claimsService.updateClaim(this.claim.id, this.claim).subscribe(
            (response: any) => {
                this.claimsService.getTickets().subscribe(
                    (response: any) => {
                        console.log(response);
                        this.newMessage = '';
                        // this.tableDataService.setTableDataSource(response);
                    },
                    (error: any) => {
                        console.log(error);
                    }
                );
            },
            (error: any) => {
                console.log(error);
            }
        );
    }
}
