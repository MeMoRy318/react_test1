import React, {Component} from 'react';

import {postsServices} from "../../services";
import {Post} from "../post/Post";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }

    componentDidMount() {
        postsServices.getAllPosts().then(({data}) =>this.setState({posts:data}))
    }

    render() {
        return (
            <div>

                {this.state.posts.map(post =><Post key={post.id} post={post}/>)}

            </div>
        );
    }
}

export {Posts};