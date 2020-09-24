import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
    let [posts, setPosts] = useState([])

    // use useEffect to talk to our API and get the posts that have been posted
    useEffect(() => {
        function fetchData() {
            axios.get("/api/posts").then((res) => {
                setPosts(res.data)
            })
        }
        fetchData();
    }, [])

    return (
        <div className="post-wall">
            Study Wall Posts
            <br /><br />
            <ul>
                {posts.map(post => (
                    <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        {post.category}
                      </p>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {post.body}
                        <br/>
                <time datetime="2016-1-1">{post.date}</time>
                      </div>
                    </div>
                    <footer className="card-footer">
                      <a href="#" className="card-footer-item">Join Wall</a>
                    </footer>
                  </div>
                )
                )}
            </ul>
            <br />
        </div>

    )
}
