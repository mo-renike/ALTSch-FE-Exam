import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import "./Details.scss";
import {
    AiOutlineLink,
    AiFillLinkedin,
    AiOutlineTwitter,
    AiFillMail,
    AiOutlineWhatsApp,
    AiOutlineStar,
    AiOutlineFork,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Details = () => {
    const { repoName } = useParams();
    const [details, setDetails] = React.useState([]);

    React.useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(
                `https://api.github.com/repos/mo-renike/${repoName}`
            );
            const data = await response.json();
            setDetails(data);
        };
        fetchDetails();
        //console.log(details);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // toggle sidebar on mobile
    const toggleSidebar = () => {
        document.querySelector(".details__body").classList.toggle("show-sidebar");
    };
    // const slideUp = () => {
    //     console.log("oti lo");
    // };

    // details to use : name, created_at, description, forks, homepage, html_url, language, topics.map license, open_issues, owner {avatar_url followers_url following_url} stargazers_count, updated_at, watchers

    return (
        <div>
            <Helmet>
                <title>{repoName}</title>
                <meta name="description" content={details.description} />
                <meta
                    name="keywords"
                    content="react-helmet, altschool africa, github repos, github api, react hooks,"
                />
            </Helmet>
            {details.length === 0 ? (
                <Loading title="Loading Repo details..." />
            ) : (
                <div className="details">
                    <button
                        type="button"
                        className="details__body-toggle"
                        onClick={toggleSidebar}>
                        <GiHamburgerMenu />
                    </button>
                    <div className="details__body">
                        <aside className="details__body-left">
                            {/* <button type="button" className="slide_btn">
                                <span></span>
                                <span></span>
                            </button> */}
                            <img src={details.owner.avatar_url} alt="mo-renike" />
                            <div className="details__body-owner">
                                <h3>@{details.owner.login}</h3>
                                <h4>Morenike Oyewole</h4>
                                <div className="link">
                                    {" "}
                                    <a
                                        href="http://github.com/mo-renike"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiOutlineLink /> Github Profile Page
                                    </a>
                                    <a
                                        href="https://mo-renike.github.io/portfolio-page/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiOutlineLink /> Portfolio Website
                                    </a>
                                    <a
                                        href="http://twitter.com/mo_renike_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        <AiOutlineTwitter /> Twitter
                                    </a>
                                    <a
                                        href="http://linkedin.com/in/morenike-oyewole"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        <AiFillLinkedin /> LinkedIn
                                    </a>
                                    <a
                                        href="https://wa.link/xvyhzl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        <AiOutlineWhatsApp /> Whatsapp Me
                                    </a>
                                    <a
                                        href="mailto:herroyalpianist@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        <AiFillMail /> Send a mail
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <main className="details__body-main">
                            <h1>{details.name}</h1> <br />
                            <p>
                                {details.description
                                    ? details.description
                                    : "No description added yet"}
                            </p>
                            <p className="dim">Primary Language: {details.language}</p>
                            <p className="dim">
                                {" "}
                                Created on {new Date(
                                    details.created_at
                                ).toDateString()} || Last Updated on{" "}
                                {new Date(details.updated_at).toDateString()}
                            </p>   {" "}
                            <div className="d-flex">
                                <p>
                                    <AiOutlineStar />{" "}
                                    <span>{details.stargazers_count} Stars</span>
                                </p>
                                <p>
                                    <AiOutlineFork /> <span>{details.forks} Forks</span>
                                </p>
                                <a
                                    href={details.homepage ? details.homepage : "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiOutlineLink /> Hosted Link
                                </a>
                                <a
                                    href={details.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiOutlineLink /> Github Link
                                </a>{" "}
                            </div>
                            <p>
                                <span className="dim">Repo size: {details.size}kb</span>
                            </p>
                            <div className="d-flex">
                                {details.topics ? (
                                    details.topics.map((topic) => (
                                        <span className="topic" key={topic}>
                                            {topic}
                                        </span>
                                    ))
                                ) : (
                                    <span className="topic">No topic added yet</span>
                                )}
                            </div>
                        </main>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
