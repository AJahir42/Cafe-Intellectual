import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import Bookmark from '../Bookmark/Bookmark';
import './Blog.css'

const Blog = () => {

    const [contents,setcontents]=useState([])
    const [duration,setDuration]=useState(0)
    

    useEffect(()=>{
        fetch('contents.json')
        .then(res=>res.json())
        .then(data=>setcontents(data))
    },[])

    // showing total readtime in UI
    const handleAddToTime=(time)=>{

        const totalDuration=duration+parseFloat(time);
        setDuration(totalDuration);
     
    }

    return (
        <div className='blog-container'> 
            <div className='content-container'>
                {contents.map(content=><Content 
                key={content.id}
                content={content}
                handleAddToTime={handleAddToTime}
                ></Content>)}
            </div>
            <div className='bookmark-container'>
                <Bookmark duration={duration}></Bookmark>
            </div>
        </div>
    );
    
};

export default Blog;