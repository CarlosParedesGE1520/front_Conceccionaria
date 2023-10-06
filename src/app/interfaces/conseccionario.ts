export interface ConseccionarioData {
    id:                   number;
    con_fecha_venta:      Date;
    con_nom_empresa:      string;
    con_nom_almacen:      string;
    con_cantidad:         number;
    con_nom_tipo_factura: string;
}


export interface ConseccionarioObj {
    con_nom_empresa:      string;
    con_cantidad:            number;
}