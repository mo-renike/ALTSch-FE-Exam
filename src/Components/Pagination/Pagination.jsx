import React from 'react'

const Pagination = ({ currentPage, paginate, pageNumbers, users, usersPerPage }) => {
    return (
        <div className="users__pagination">
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
                disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                className="next"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination