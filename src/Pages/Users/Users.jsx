import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Navbar/Loading/Loading";
import "./Users.scss";

const Users = () => {
    const [users, setUsers] = useState([]);
    //implement pagination   
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://randomuser.me/api/?results=81");
            const data = await response.json();
            setUsers(data.results);
        }
        fetchData();
        console.log(currentUsers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(9);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: "smooth" });
    };



    // each user should have a link to their profile
    //cell, gender, email, dob, phone, location, picture, age

    return (
        <div className="users">
            <div className="users__nav">
                <div className="users__nav-links">
                    {" "}
                    <Link to="/users/men">Men</Link>
                    <Link to="/users/women">Women</Link>
                </div>

                <div className="users__nav-search">
                    <input type="search" name="search" placeholder="Search Users.." />
                </div>
            </div>
            <div className="users__list">
                {currentUsers.length ? currentUsers.map((user, index) => {
                    return (
                        <div className="users__list_item" key={index}>
                            <div className="users__list_item-img">
                                <img src={user.picture.large} alt="" />
                            </div>
                            <div className="users__list_item-dets">
                                <h3>
                                    {user.name.title} {user.name.first} {user.name.last}{" "}
                                    {/* <small>
                                        {user.gender === "male"
                                            ? "(M)"
                                            : user.gender === "female" ?
                                                "(F)"
                                                : "X"}{" "}
                                    </small>{" "} */}
                                </h3>
                                <p>
                                    {user.gender}, {user.dob.age}
                                </p>{" "}
                                <p>{user.phone}</p>
                                <p>
                                    {" "}
                                    {user.location.city}, {user.location.country}{" "}
                                </p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    );
                }) : <Loading />}
            </div>
            <div className="users__pagination">
                {/* pagination with prev and next buttons */}
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="prev"
                >
                    Prev
                </button>
                {/* pagination */}
                {users.map((user, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? "active" : "button"}
                        >
                            {/* display only number of pages available */}
                            {index + 1}
                        </button>
                    )
                })}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                    className="next"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Users;
