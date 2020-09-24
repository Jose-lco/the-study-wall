import React from 'react';
import CreateWall from "./CreateWall";
import PostWall from "./PostWall";
import SearchTopic from "./SearchTopic";

const Wall = () => {
    return (
        <div className="container">
            <br/>
            <div className="columns">
                <div className="search column is-10">
                    <SearchTopic />
                </div>
                <div className="column">
                    <CreateWall />
                </div>
            </div>
            <div className = "columns">
                <div className = "column is-12">
                    <PostWall />
                </div>
            </div>
        </div>
    )
}

export default Wall;