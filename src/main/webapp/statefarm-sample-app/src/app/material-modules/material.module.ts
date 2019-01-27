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
    MatSortModule
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
        MatSortModule
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
        MatSortModule
    ]
})
export class MaterialModule {}
