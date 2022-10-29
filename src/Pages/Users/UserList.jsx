import React from "react";
import Loading from "../../Components/Navbar/Loading/Loading";
import Pagination from "../../Components/Pagination/Pagination";

const UserList = ({
  currentUsers,
  currentPage,
  paginate,
  pageNumbers,
  users,
  usersPerPage,
}) => {
  return (
    <div>
      <div className="users__list">
        {currentUsers.length ? (
          currentUsers.map((user, index) => {
            return (
              <div className="users__list_item" key={index}>
                <div className="users__list_item-img">
                  <img src={user.picture.large} alt="" />
                </div>
                <div className="users__list_item-dets">
                  <h3>
                    {user.name.title} {user.name.first} {user.name.last}
                  </h3>
                  <p>
                    {user.gender}, {user.dob.age}
                  </p>
                  <p>{user.phone}</p>
                  <p>
                    {user.location.city}, {user.location.country}
                  </p>
                  <p>{user.email}</p>
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        pageNumbers={pageNumbers}
        users={users}
        usersPerPage={usersPerPage}
      />
    </div>
  );
};

export default UserList;
