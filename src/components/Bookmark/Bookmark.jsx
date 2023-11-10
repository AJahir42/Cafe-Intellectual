import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const {duration}=props
    
    return (
        <div className='bookmark'>
            <button>Spent time on read:{duration} min</button>
            <h3>Bookmarked Blogs</h3>
            <h5>Hi babyyyyyy</h5>

        </div>
    );
};

export default Bookmark;