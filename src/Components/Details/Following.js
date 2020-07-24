import React, {Component} from 'react';
import { render } from '@testing-library/react';
import dp from '../../Images/avatar.png';



class Following extends Component{
    constructor(props){
        super(props);
        this.state = {
            following: []

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
                          <p style={{fontSize: '12px', color: 'gray', paddingLeft: '5px'}}>Following : 12</p>
                      </div>
                      <div className = "offset-md-2 col-lg-1">
                          <h6>Following</h6>
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
                          <h6>Following</h6>
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
                          <h6>Following</h6>
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
                          <h6>Following</h6>
                      </div>
                  </div>
                </div>
            </section>
      );
  }
}

  export default Following;    