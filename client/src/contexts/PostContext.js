import React, { useState, createContext } from 'react';
export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
    let [posts, setPosts] = useState([])
    let [isModalVisible, setIsModalVisible] = useState(false);
    const [body, setBody] = useState("")
    const [category, setCategory] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const addPosts = (data) => { 

        setPosts(data);
    }
    const toggleModal = () => {
        
        setIsModalVisible(!isModalVisible)
    }
    const addTime = (start, end) => { 
        setStart(start); 
        setEnd(end); 
    }
    const addCategory = (res) => { 
        setCategory(res); 
        
    }
    const addBody = (res) => { 
        setBody(res); 
        
    }
    return (
        <PostContext.Provider value={{ addPosts, posts, body, category, start, end, addBody, addCategory, addTime, toggleModal, isModalVisible,}}>
            {children}
        </PostContext.Provider>);
    
}