import React, { Component } from 'react';
// import axios from 'axios';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
  
import './Blog.css';

import {Route,NavLink} from 'react-router-dom';

class Blog extends Component {
    

   


    render () {
       

        return (
            <div>
            
            <header>
              <nav>
                <ul>
                  <li>
                    {/* <a href="/">Home</a> */}
                    <NavLink to ="/" exact >Home</NavLink>
                  </li>
                  <li>
                  <NavLink to ={
                    {
                      pathname: '/new-post',
                      hash:'#submit',
                      search:'?quick-submit=true'
                    }
                  }>New Post</NavLink>
                    {/* <a href="/new-post">New Post</a> */}
                  </li>
                </ul>
              </nav>
            </header>
            {/* <Route path='/' exact render={()=><h1>Home</h1>}/> */}
            <Route path="/" exact component={Posts}/>
            <Route path="/new-post" component={NewPost}/>
            <Route path="/:id" component={Posts}/>
          </div>
        );
    }
}

export default Blog;