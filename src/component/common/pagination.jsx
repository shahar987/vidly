import _ from 'lodash'

function Pagination({itemCount, pageSize,currentPage, handlePageChange}) {

    const pageCount = Math.ceil(itemCount / pageSize);
    const pages = _.range(1, pageCount + 1)

    return(
        <div>
        {
        pageCount === 1 ? <div></div>:
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page=> (

                    <li className="page-item" key={page}>
                        <a className="page-link" onClick={()=>handlePageChange(page)}>{page} </a>
                    </li>
                ))}
            </ul>
        </nav>
        }
        </div>
    )
}

export default Pagination