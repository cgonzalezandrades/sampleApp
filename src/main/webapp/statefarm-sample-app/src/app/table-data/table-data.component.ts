import {
    Component,
    OnInit,
    ViewChild,
    Input,
    TemplateRef,
    EventEmitter,
    Output
} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ClaimsService } from '../claim/claims.service';
import { TableDataService } from './table-data.service';

@Component({
    selector: 'app-table-data',
    templateUrl: './table-data.component.html',
    styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
    dataSource = new MatTableDataSource();

    constructor(private claimsService: ClaimsService, public tableDataService: TableDataService) {}
    @ViewChild(MatSort) private sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input() public templateRef: TemplateRef<any>;
    @Output() public rowClickedEvent = new EventEmitter<any>();
    ngOnInit() {
        this.tableDataService.sort = this.sort;
        this.claimsService.getClaims().subscribe(
            (response: any) => {
                console.log(response);
                this.dataSource = new MatTableDataSource(response);
                this.dataSource.paginator = this.paginator;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    // highlight row when hovered with mouse
    public rowHovered(element, action) {
        if (action === 'enter') {
            element.parentElement.style.background = '#f4f4f4';
        } else {
            element.parentElement.style.background = 'white';
        }
    }

    // get click evetn from component and emit to parent component
    public rowClicked(row): void {
        this.rowClickedEvent.emit(row);
    }
}
