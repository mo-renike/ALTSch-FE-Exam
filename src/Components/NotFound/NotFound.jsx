import React from "react";
import { Link } from "react-router-dom";
import error from "./R.png";

const NotFound = () => {
    const containerStle = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
    }
    const imgStyle = {
        width: "30%",
    }

    return (
        <div
            style={containerStle}
        >
            <img src={error} style={imgStyle} alt="Not found" />
            <h3>Are you lost?</h3>
            <Link className="btn" to="/" >Go back home</Link>
        </div>
    );
};

export default NotFound;
