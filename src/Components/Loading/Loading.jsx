import React from 'react';
import './Loading.scss';

const Loading = ({ title }) => {
    return (
        <div className='loading'>
            <span className="loader"></span>
            <h3>{title}</h3>
        </div>
    )
}

export default Loading