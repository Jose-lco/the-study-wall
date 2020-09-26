import React, { useContext } from 'react';

import { PostContext } from '../contexts/PostContext';


export default () => {
   

      let { posts } = useContext(PostContext);
    
    // use useEffect to talk to our API and get the posts that have been posted
     posts = posts.map(result => {
      return {body: result.desc, category: result.title, start: (new Date(result.start)).toLocaleString(), end: (new Date(result.end)).toLocaleString()}
  })

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
                <p>{post.start}</p>
                <p>{post.end}</p>
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
