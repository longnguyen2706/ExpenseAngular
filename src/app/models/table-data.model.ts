import { MatTableDataSource } from '@angular/material';

export interface TableData{
    cols: Array<string>,
    rows: Array<Array<any>>
}

export interface MatTableData{
    cols: Array<string>,
    rows: MatTableDataSource<any>
}
// export interface RecordData{
//     cols: Array<String>,
//     records: Array<Object>
// }