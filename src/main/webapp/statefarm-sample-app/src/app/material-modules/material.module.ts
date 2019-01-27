import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class MaterialModule {}
