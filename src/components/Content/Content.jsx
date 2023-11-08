import React from 'react';
import './Content.css'

const Content = (props) => {
    const {name, picture, title, user_img, publish, publish_date}=props.content;
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
                <p>05 min read</p>
            </div>
        </div>
          
    </div>
    );
};

export default Content;