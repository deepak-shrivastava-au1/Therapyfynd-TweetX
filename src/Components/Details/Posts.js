import React, {Component} from 'react';
import { render } from '@testing-library/react';
import dp from '../../Images/avatar.png';



class Posts extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []

        }
    }


onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {

      return(
            <section>
                <div className = "container">
                  <div className = "row">
                      <div className = "col-lg-12">
                          <div className = "row">
                            <div className = "col-sm-3"></div>
                                <div className = "col-sm-1">
                                    <img src = {dp} style= {{height: '40px', width: '40px', borderRadius: '50%'}} />
                                </div>
                                <div className = "col-sm-2">
                                    <h5>Arjun Reddy</h5>
                                </div>
                                <div className = "offset-md-2 col-sm-1">
                                    <p style = {{fontSize: '10px'}}>10 min ago</p>
                                </div>
                            </div>
                            <div className = "row">
                            <div className = "col-sm-4"></div>
                                <div className = "col-sm-5">
                                    <p  style = {{fontSize: '14px', color: 'gray'}} >A great way to project your inner sense is to create something which is very rare ...</p>
                                </div>
                             </div>
                       </div>
                  </div>      

                  <div className = "row">
                      <div className = "col-lg-12">
                          <div className = "row">
                            <div className = "col-sm-3"></div>
                                <div className = "col-sm-1">
                                    <img src = {dp} style= {{height: '40px', width: '40px', borderRadius: '50%'}} />
                                </div>
                                <div className = "col-sm-2">
                                    <h5>Arjun Reddy</h5>
                                </div>
                                <div className = "offset-md-2 col-sm-1">
                                    <p style = {{fontSize: '10px'}}>10 min ago</p>
                                </div>
                            </div>
                            <div className = "row">
                            <div className = "col-sm-4"></div>
                                <div className = "col-sm-5">
                                    <p  style = {{fontSize: '14px', color: 'gray'}} >A great way to project your inner sense is to create something which is very rare .A great way to project your inner sense is to create something which is very rare A great way to project your inner sense is to create something which is very rare..</p>
                                </div>
                             </div>
                       </div>
                  </div>   

                  <div className = "row">
                      <div className = "col-lg-12">
                          <div className = "row">
                            <div className = "col-sm-3"></div>
                                <div className = "col-sm-1">
                                    <img src = {dp} style= {{height: '40px', width: '40px', borderRadius: '50%'}} />
                                </div>
                                <div className = "col-sm-2">
                                    <h5>Arjun Reddy</h5>
                                </div>
                                <div className = "offset-md-2 col-sm-1">
                                    <p style = {{fontSize: '10px'}}>10 min ago</p>
                                </div>
                            </div>
                            <div className = "row">
                            <div className = "col-sm-4"></div>
                                <div className = "col-sm-5">
                                    <p  style = {{fontSize: '14px', color: 'gray'}} >A great way to project your inner sense is to create something which is very rare ...</p>
                                </div>
                             </div>
                       </div>
                  </div>          
                </div>
            </section>
      );
  }
}

  export default Posts;    