import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import './Content.css'

const Content = (props) => {
    const handleAddToTime=props.handleAddToTime;
    const {name, picture, title, user_img, time, publish_date}=props.content;

    return (
    <div className='content'>

        <img src={picture} alt="" />
        <div className='publisher'>
            <div className='creator-profile'>
                <img src={user_img} alt="" />        
                <div>
                    <h3>{name}</h3>
                    <p><small>{publish_date}</small></p>
                </div>
            </div>
            <div>
                <p>{time} min read<button><FontAwesomeIcon icon={faBookmark} /></button></p>
            </div>
        </div>
        <h2>{title}</h2>
        <button className='blog-read' onClick={()=>handleAddToTime(time)}><small>Mark as read</small></button>
          
    </div>
    );
};

export default Content;