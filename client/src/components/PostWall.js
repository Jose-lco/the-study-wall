import React, { useContext } from 'react';

import { PostContext } from '../contexts/PostContext';
import { useHistory } from 'react-router-dom';


export default () => {
   

      let { posts } = useContext(PostContext);
      const history = useHistory();
    
    // use useEffect to talk to our API and get the posts that have been posted
     posts = posts.map(result => {
      return {body: result.desc, category: result.title, start: (new Date(result.start)).toLocaleString(), end: (new Date(result.end)).toLocaleString(), link: result.link}
  })
  
 
  function create(link, start, end) {
    if(Date.parse(start) > Date.now()){
      alert("Almost time, not quite though :(")
    }
      else if(Date.parse(end) < Date.now()){
        alert("This session ended, feel free to schedule one in the calendar :)")
      }
      else{
        history.push(`/room/${link}`);
      }
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
                      <button className="card-footer-item" onClick={() => create(post.link, post.start, post.end)}>Join Wall</button>
                    </footer>
                  </div>
                )
                )}
            </ul>
            <br />
        </div>

    )
}
