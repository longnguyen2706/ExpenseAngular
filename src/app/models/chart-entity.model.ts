export interface ChartEntity{
    columns: Array<ColumnHeader>,
    rows: Array<Row>
}

export interface Row{
    data: Array<RowCell>,
    style?: string,
    label?: string
}

export interface RowCell{
    v: number, // value 
    f: string // format
}
export interface ColumnHeader{
    id: string,
    label: string,
    type: ColumnType 
}

export type ColumnType = 'number' | 'string'| 'date'; 

