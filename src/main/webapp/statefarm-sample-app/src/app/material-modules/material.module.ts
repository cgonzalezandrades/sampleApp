import { NgModule } from '@angular/core';

//  Here Im adding only angular material modules
import {
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatSortModule,
    MatDividerModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatDialogModule,
        MatTooltipModule,
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule,
        MatSortModule,
        MatDividerModule,
        MatListModule
    ],
    exports: [
        MatTooltipModule,
        MatSelectModule,
        MatDialogModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDividerModule,
        MatListModule
    ]
})
export class MaterialModule {}
