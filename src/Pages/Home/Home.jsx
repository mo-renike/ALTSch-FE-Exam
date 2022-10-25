import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="home__text">
                {" "}
                <h1>Finder</h1>
                <p>
                    Find your old school mates, ex, collegues, family, friends, debtors or
                    enemy, <br /> find them by their name, gender, age or location.
                </p>
                <NavLink className="btn" to="/users">
                    Find Them
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
