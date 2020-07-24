import React, {Component} from 'react';
import { render } from '@testing-library/react';
import {  Link } from "react-router-dom";



class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            password:'',
            confirmPassword:''

        }
    }


onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

onSubmit = (e) => {
    e.preventDeafult();
  };
 
  render() {

      return(
          <section>
              <div style = {{marginTop: "0px"}} className = "container">
              
              <br />
              <div className = "row">
                  <div className = "col-lg-2">
                        <Link className = "login" to='/login'>
                        <button style = {{background: 'none', border: "1px solid gray", borderRadius: "10px", width: "100%"}}>Login</button>
                        </Link>
                  </div>
              </div>
          </div>
          <div style = {{marginTop: "60px"}} className = "container">
              <div className = "row">
                  <div className = "col-lg-3">
                      <h2>Create Account</h2>
                  </div>
              </div>
              
              <div className = "row">
                <div className = "col-lg-4">
                <form className = "signup" onSubmit={this.onSubmit} encType='multipart/form-data'>
                    <input
                          type='text'
                          placeholder='Name'
                          onChange={(e) => this.onChange(e)}
                          defaultValue=""
                          required
                        />
                    
                    <input
                          type='email'
                          placeholder='Email'
                          onChange={(e) => this.onChange(e)}
                          defaultValue=""
                          required
                        />
                 
                    <input
                          type='password'
                          placeholder='Password'
                          onChange={(e) => this.onChange(e)}
                          defaultValue=""
                          required
                        />
                  
                    <input
                          type='password'
                          placeholder='Confirm Password'
                          onChange={(e) => this.onChange(e)}
                          defaultValue=""
                          required
                        />
                    <div className = "row">
                        <div className = "offset-md-8 col-sm-4">
                            <button>Sign up</button>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
          </div>
          </section>
      );
  }
}

  export default SignUp;