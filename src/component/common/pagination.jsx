import _ from 'lodash'
import React from "react";
import PropTypes from 'prop-types'

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
                    <li className={currentPage === page? "page-item active": "page-item"} key={page}>
                        <a className="page-link" onClick={()=>handlePageChange(page)}>{page} </a>
                    </li>
                ))}
            </ul>
        </nav>
        }
        </div>
    )
}

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired

}
export default Pagination