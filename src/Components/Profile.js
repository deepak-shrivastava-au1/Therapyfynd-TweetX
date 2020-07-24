import React, {Component} from 'react';
import { render } from '@testing-library/react';
import Following from './Details/Following';
import {  Link } from "react-router-dom";
import dp from '../Images/avatar.png';
import Posts from './Details/Posts';
import Followers from './Details/Followers';



class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:'511',
            followers:'234',
            following:'102',
            isPostsClicked: false,
            isFollowersClicked:false,
            isFollowingClicked:false

        }
    }


onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

onClickPosts = (e) =>{
    this.setState({ 
        isPostsClicked: true,
        isFollowersClicked:false,
        isFollowingClicked:false
    
    })
}
onClickFollowers = (e) =>{
    this.setState({ 
        isPostsClicked: false,
        isFollowersClicked:true,
        isFollowingClicked:false
    
    })
}
onClickFollowing = (e) =>{
    this.setState({ 
        isPostsClicked: false,
        isFollowersClicked:false,
        isFollowingClicked:true
    
    })
    
}
 
  render() {

      return(
            <section>
                <div style = {{marginBottom: '50px'}} className = "container">
                    <div className = "row">
                        <div className = "col-lg-3"></div>
                        <div className = "col-lg-2">
                            <img src = {dp} style = {{height: '100px', width: '100px', borderRadius: '50%'}} />
                        </div>
                        <div id = "posts" className = "col-lg-4">
                            <h3 style = {{marginTop: '28px', color: 'gray'}}>Arjun Reddy</h3>
                            <ul>
                                <li className = "first">Posts : {this.state.posts}</li>
                                <li>Followers : {this.state.followers}</li>
                                <li>Following : {this.state.following}</li>
                            </ul>
                        </div>
                    </div>
                    <div id = "options" className = "row">
                        <div className = "col-lg-3"></div>
                        <div className = "col-lg-6">
                        <div id="slider" className = "row">
                            <div className = "col-sm-4">
                             <button onClick = {this.onClickPosts}><i className='far fa-address-card'></i> &emsp; Posts</button>
                            </div>
                            <div className = "col-sm-4">
                              <button onClick = {this.onClickFollowers}><i className='far fa-address-card'></i> &emsp; Followers</button>
                            </div>
                            <div className = "col-sm-4">
                                 <button onClick = {this.onClickFollowing}><i className='far fa-address-card'></i> &emsp; Following</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {this.state.isPostsClicked ?  <Posts /> : '' }

                {this.state.isFollowersClicked ? <Followers /> : ''}
               
                {this.state.isFollowingClicked ? <Following /> : ''}
            </section>
      );
  }
}

  export default Profile;    