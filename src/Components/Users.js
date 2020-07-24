import React, {Component} from 'react';
import { render } from '@testing-library/react';
import dp from '../Images/avatar.png';



class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []

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
                      <div className = "col-lg-3"></div>
                      <div className = "col-lg-1">
                          <img src = {dp} style= {{height: '40px', width: '40px', borderRadius: '50%'}} />
                      </div>
                      <div className = "col-lg-2">
                          <h5>Arjun Reddy</h5>
                          <p style={{fontSize: '12px', color: 'gray', paddingLeft: '5px'}}>Following : 122</p>
                      </div>
                      <div className = "offset-md-2 col-lg-1">
                          <button style = {{background: 'red', color: 'white', borderRadius: '10px', fontSize: 'small', width: '100%', padding: "5px"}}>Follow</button>
                      </div>
                  </div>

                  <div className = "row">
                      <div className = "col-lg-3"></div>
                      <div className = "col-lg-1">
                          <img src = {dp} style= {{height: '40px', width: '40px', borderRadius: '50%'}} />
                      </div>
                      <div className = "col-lg-2">
                          <h5>Arjun Reddy</h5>
                          <p style={{fontSize: '12px', color: 'gray', paddingLeft: '5px'}}>Following : 212</p>
                      </div>
                      <div className = "offset-md-2 col-lg-1">
                      <button style = {{background: 'red', color: 'white', borderRadius: '10px', fontSize: 'small', width: '100%', padding: "5px"}}>Follow</button>
                      </div>
                  </div>

                  <div className = "row">
                      <div className = "col-lg-3"></div>
                      <div className = "col-lg-1">
                          <img src = {dp} style= {{height: '40px', width: '40px', borderRadius: '50%'}} />
                      </div>
                      <div className = "col-lg-2">
                          <h5>Arjun Reddy</h5>
                          <p style={{fontSize: '12px', color: 'gray', paddingLeft: '5px'}}>Following : 12</p>
                      </div>
                      <div className = "offset-md-2 col-lg-1">
                      <button style = {{background: 'red', color: 'white', borderRadius: '10px', fontSize: 'small', width: '100%', padding: "5px"}}>Follow</button>
                      </div>
                  </div>

                  <div className = "row">
                      <div className = "col-lg-3"></div>
                      <div className = "col-lg-1">
                          <img src = {dp} style= {{height: '40px', width: '40px', borderRadius: '50%'}} />
                      </div>
                      <div className = "col-lg-2">
                          <h5>Arjun Reddy</h5>
                          <p style={{fontSize: '12px', color: 'gray', paddingLeft: '5px'}}>Following : 12</p>
                      </div>
                      <div className = "offset-md-2 col-lg-1">
                      <button style = {{background: 'none', border: 'none'}}>Following</button>
                      </div>
                  </div>

                  <div className = "row">
                      <div className = "col-lg-3"></div>
                      <div className = "col-lg-1">
                          <img src = {dp} style= {{height: '40px', width: '40px', borderRadius: '50%'}} />
                      </div>
                      <div className = "col-lg-2">
                          <h5>Arjun Reddy</h5>
                          <p style={{fontSize: '12px', color: 'gray', paddingLeft: '5px'}}>Following : 12</p>
                      </div>
                      <div className = "offset-md-2 col-lg-1">
                      <button style = {{background: 'none', border: 'none'}}>Following</button>
                      </div>
                  </div>
                </div>
            </section>
      );
  }
}

  export default Users;    