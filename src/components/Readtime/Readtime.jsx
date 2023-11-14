import React from 'react';
import './Readtime.css'

const Readtime = (props) => {
    const {duration}=props;
    return (
        <div className='duration'>
            <h3>Spent time on read: {duration} min</h3>
            <h3>Bookmarked Blogs</h3>
        </div>
    );
};

export default Readtime;