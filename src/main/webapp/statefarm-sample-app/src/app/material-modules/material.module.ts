import { NgModule } from '@angular/core';

import {
    MatButtonModule,
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
