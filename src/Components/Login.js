import React, {Component} from 'react';
import { render } from '@testing-library/react';
import {  Link, Redirect } from "react-router-dom";
import Fire from './Fire';
import Profile from '../Components/Profile';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            isUserLoggedIn: false

        }
    }


onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

onSubmit = () => {
    var self = this;
    Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        alert('Login Success');
        self.setState({isUserLoggedIn: true});
    }).catch((error) => {
        alert('Login Failed');
    })
  };

  render() {

      return(
        <div>
            {this.state.isUserLoggedIn ? 
             <Profile />
             : 
            <section>
            <div style = {{marginTop: "0px"}} className = "container">
            <br />
            <div className = "row">
                <div className = "col-lg-2">
                        <Link className = "signup" to='/'>
                        <button style = {{background: 'none', border: "1px solid gray", borderRadius: "10px", width: "100%"}}>Create Account</button>
                        </Link>
                </div>
            </div>
           </div>
            <div style = {{marginTop: "60px"}} className = "container">
            <div className = "row">
                <div className = "col-lg-3">
                    <h2>Login</h2>
                </div>
            </div>
            
            <div className = "row">
                <div className = "col-lg-4">
                <form className = "signup" encType='multipart/form-data'>

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

                <div className = "row">
                    <div className = "col-sm-6">
                    <h6 style = {{fontSize: '18px', marginTop: '28px'}}>Forgot Password ?</h6>
                    </div>
                    <div className = "offset-md-2 col-sm-4">
                        <button onClick = {this.onSubmit}>Login</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
      </div>
      </section> 
             }
        </div>
      );
  }
}

  export default Login;