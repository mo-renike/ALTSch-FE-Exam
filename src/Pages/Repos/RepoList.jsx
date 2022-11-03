import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import "./Repos.scss";


const RepoList = ({ repo }) => {
    return (
        <a
            href={`/repo/${repo.name}`}
            className="repos__list-item"
            key={repo.id}
        >
            <div className="repos__list-header">
                {" "}
                <h2>
                    {repo.name} <small>({repo.visibility})</small>
                </h2>
                <p>
                    <AiOutlineStar /> <span>{repo.stargazers_count}</span>
                </p>
            </div>

            <p className="my-1">
                {repo.description
                    ? repo.description
                    : "No description added"}
            </p>
            <div className="dets">
                <p>
                    <small>
                        {repo.language ? repo.language : "No language Set"}
                    </small>
                </p>
                <p>
                    <small>
                        Last Updated on{" "}
                        {new Date(repo.updated_at).toDateString()}
                    </small>
                </p>
            </div>
        </a>
    )
}

export default RepoList;