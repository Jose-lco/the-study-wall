import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
    let [posts, setPosts] = useState([])

    // use useEffect to talk to our API and get the posts that have been posted
    useEffect(() => {
        function fetchData() {
            axios.get("/api/posts").then((res) => {
                console.log(JSON.stringify(res, null, 2));
                setPosts(res.data)
            })
        }
        fetchData();
    }, [])

    return (
        <div className="post-wall">
            Study Wall Posts
            <br/><br/>
            <ul>
                {posts.map(post => (
                    <div className="columns">
                        <div className="column is-1"></div>
                        <div className="posted-wall column is-9">
                            <h3>{post.title}</h3>
                            <h4><i>{post.category}</i></h4>
                            <p>{post.body}</p>
                            {post.zoomLink ? <a href={post.zoomLink}>Zoom Meeting Link</a> : ""}
                        </div>
                        <div className = "column is-1"></div>
                    </div>
                )
                )}
            </ul>
            <br/>
        </div>
        
    )
}
