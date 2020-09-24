import React, { useState, createContext } from 'react';

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
    let [posts, setPosts] = useState([])
    
    const addPosts = (data) => { 
        setPosts(data);  
    }

    return (
        <PostContext.Provider value={{ addPosts, posts }}>
            {children}
        </PostContext.Provider>);
    
}