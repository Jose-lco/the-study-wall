import React, { useState, createContext } from 'react';

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
    let [posts, setPosts] = useState([])
    let [isModalVisible, setIsModalVisible] = useState(false);
    const addPosts = (data) => { 
        setPosts(data);  
    }
    const toggleModal = () => {
        
        setIsModalVisible(!isModalVisible)
    }
    return (
        <PostContext.Provider value={{ addPosts, posts, toggleModal, isModalVisible,}}>
            {children}
        </PostContext.Provider>);
    
}