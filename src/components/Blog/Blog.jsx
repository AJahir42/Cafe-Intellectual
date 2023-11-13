import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import Bookmark from '../Bookmark/Bookmark';
import {addToDb,getBookmarks} from '../../utilities/fakeDb'
import './Blog.css'

const Blog = () => {

    const [contents,setcontents]=useState([])
    
    const [duration,setDuration]=useState(0)

    const [blogs,setBlogs]=useState([])
    
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


    const handleAddToBookmark=(blog)=>{

        let newBlogs=[];
        const exists=blogs.find(bg=>bg.id===blog.id);
        if(!exists){
            newBlogs=[...blogs,blog]
        }
        else{
            const remaining=blogs.filter(bg=>bg.id!==blog.id);
            newBlogs=[...remaining,exists]
        }
        setBlogs(newBlogs)
    }


    return (
        <div className='blog-container'> 
            <div className='content-container'>
                {contents.map(content=><Content 
                key={content.id}
                content={content}
                handleAddToTime={handleAddToTime}
                handleAddToBookmark={handleAddToBookmark}
                ></Content>)}
            </div>
            <div className='bookmark-container'>
                <Bookmark duration={duration}></Bookmark>
            </div>
        </div>
    );
    
};

export default Blog;