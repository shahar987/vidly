import '../../index.css';


function TableHeader({columns, sortColumn, onSort}){
    const raiseSort = (path) =>{
        const sortColumn1 = {...sortColumn}
        if (sortColumn1.path === path){
            sortColumn1.order = sortColumn1.order === "asc"? "desc":"asc"
        }
        else{
            sortColumn1.path= path
            sortColumn1.order= "asc"
        }
        onSort(sortColumn1)

    }

    const renderSortIcon =(column)=>{
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }

    return(
        <thead>
            <tr>
                {columns.map(column =>
                <th 
                key={column.path || column.key} 
                onClick={()=> raiseSort(column.path)}
                className='clickable'
                >
                    {column.lable} {renderSortIcon(column)}
                </th>)}
            </tr>
        </thead>
    )
}

export default TableHeader;