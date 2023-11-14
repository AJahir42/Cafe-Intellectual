import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {

    const {title}=props.blog;
    return (
        <div className='bookmark'>
            
           
            <h5>{title}</h5>

        </div>
    );
};

export default Bookmark;