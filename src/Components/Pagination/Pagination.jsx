import React from 'react';
import "../../Pages/Repos/Repos.scss";

const Pagination = ({ currentPage, paginate, pageNumbers, repos, reposPerPage }) => {
    return (
        <div className="repos__pagination">
            {/* pagination with prev and next buttons */}
            <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="prev"
            >
                Prev
            </button>

            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={number === currentPage ? "button active" : "button"}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(repos.length / reposPerPage)}
                className="next"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination