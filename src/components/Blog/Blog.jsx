import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import Bookmark from '../Bookmark/Bookmark';
import './Blog.css'

const Blog = () => {

    const [contents,setcontents]=useState([])

    useEffect(()=>{
        fetch('contents.json')
        .then(res=>res.json())
        .then(data=>setcontents(data))
    },[])

    return (
        <div className='blog-container'> 
            <div className='content-container'>
                {contents.map(content=><Content content={content}></Content>)}
            </div>
            <div className='bookmark-container'>
                <Bookmark></Bookmark>
            </div>
        </div>
    );
    
};

export default Blog;