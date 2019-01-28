import { AfterViewInit, Component, Inject, AfterContentChecked } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ClaimsService } from '../../claim/claims.service';
@Component({
    selector: 'app-claim-dialog',
    templateUrl: './claim-dialog.component.html',
    styleUrls: ['./claim-dialog.component.css']
})
export class ClaimDialogComponent implements AfterContentChecked {
    public claim: any;
    public newMessage: String;
    public tatuses = ['New', 'Open', 'Pending', 'Resolved'];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ClaimDialogComponent>,
        private claimsService: ClaimsService
    ) {}

    public ngAfterContentChecked() {
        this.claim = this.data.claim;
    }

    public onNoClick(): void {
        this.dialogRef.close('cancel');
    }

    public postMessage() {
        this.claim.messages.push(this.newMessage);
        this.claimsService.putClaim(this.claim.id, this.claim).subscribe(
            (response: any) => {
                // reset message text area
                this.newMessage = '';
            },
            (error: any) => {
                console.log(error);
            }
        );
    }
}
