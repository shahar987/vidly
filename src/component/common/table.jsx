import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import React from "react";


function Table({columns, sortColumn, onSort, data}){
    return(
        <table className="table">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}/>
            <TableBody
                columns={columns}
                data={data}/>
        </table>
    )
}

export default Table