import React, { useContext } from 'react';
import { v1 as uuid } from "uuid";
import { PostContext } from '../contexts/PostContext';
import { useHistory } from 'react-router-dom';


export default () => {
   

      let { posts } = useContext(PostContext);
      const history = useHistory();
    
    // use useEffect to talk to our API and get the posts that have been posted
     posts = posts.map(result => {
      return {body: result.desc, category: result.title, start: (new Date(result.start)).toLocaleString(), end: (new Date(result.end)).toLocaleString()}
  })
  function create() {
    const id = uuid();
    history.push(`/room/${id}`);
}

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
                      <button className="card-footer-item" onClick={create}>Join Wall</button>
                    </footer>
                  </div>
                )
                )}
            </ul>
            <br />
        </div>

    )
}
