import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Pagination from "../../Components/Pagination/Pagination";
import { Helmet } from "react-helmet-async";
import RepoList from "./RepoList";

const Repos = () => {
    const [repos, setRepos] = React.useState([]);
    const [sort, setSort] = useState({
        sort: "created",
        order: "desc",
    });

    // fetch repos data from github api
    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch(
                `https://api.github.com/users/mo-renike/repos?sort=${sort.sort}&direction=${sort.order}&per_page=100`
            );
            const data = await response.json();
            setRepos(data);
        };
        fetchRepos();
    }, [sort.order, sort.sort]);
    //console.log(repos);

    // set dynamic reposPerPage value according to screen size
    if (window.innerWidth <= 768) {
        var dynamicPerPage = 3;
    } else {
        dynamicPerPage = 6;
    }

    // implement pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(dynamicPerPage);
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // calculate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(repos.length / reposPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="repos">
            {/* Implement SEO */}
            <Helmet>
                <title>Repos</title>
                <meta name="description" content="My Github Repos" />
                <meta
                    name="keywords"
                    content="react-helmet, altschool africa, github repos, github api, react hooks,"
                />
            </Helmet>
            {/* Loading State */}
            {currentRepos.length === 0 ? (
                <Loading title="Loading Repos..." />
            ) : (
                <div>
                    <div className="repos__header">
                        <h2>
                            Showing all {repos.length} Repos sorted by date {sort.sort} in{" "}
                            {sort.order === "asc" ? "ascending" : "descending"} order.
                        </h2>{" "}
                        {/* Sort repo  */}
                        <div className="repos__sort">
                            <div className="repos__sort-sort">
                                <label htmlFor="sort">Sort by:</label>
                                <select
                                    name="sort"
                                    id="sort"
                                    onChange={(e) => setSort({ ...sort, sort: e.target.value })}
                                >
                                    <option value="updated">Updated</option>
                                    <option value="created">Created</option>
                                    <option value="pushed">Pushed</option>
                                    <option value="full_name">Name</option>
                                </select>
                            </div>
                            <div className="repos__sort-order">
                                <label htmlFor="order">Order:</label>
                                <select
                                    name="order"
                                    id="order"
                                    onChange={(e) => setSort({ ...sort, order: e.target.value })}
                                >
                                    {" "}
                                    <option value="desc">Descending</option>
                                    <option value="asc">Ascending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* display repos */}
                    <div className="repos__list">
                        {currentRepos.map((repo) => {
                            return (
                                <RepoList key={repo.id} repo={repo} />
                            );
                        })}
                    </div>{" "}
                    {/* import pagination component */}
                    <Pagination
                        repos={repos}
                        currentPage={currentPage}
                        reposPerPage={reposPerPage}
                        pageNumbers={pageNumbers}
                        paginate={paginate}
                    />
                </div>
            )}
        </div>
    );
};

export default Repos;
