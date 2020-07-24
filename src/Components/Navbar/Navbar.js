import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {  Link } from "react-router-dom";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

export default class Navibar extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                isCandidateLoggedIn: true,
                };
                
            }



  render() {

    return (
      <Navbar
      collapseOnSelect
      expand='lg'
      // bg='dark'
      // variant='dark'
      style={{ marginBottom: '0px', background: 'white' }}
  >
    <div className="container-fluid shadow p-3 mb-5 bg-white rounded">
      <Link to="/" class="navbar-brand">
        <h4 style={{ marginTop: "10px", color: "red",paddingLeft: '80px' }}>
          TweetX
        </h4>
        {/* <!-- <img src="./static/img/logo-small.png" alt="logo" class="d-none d-lg-block"> --> */}
        <span class="sr-only">Home</span>
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav style = {{float: 'right', marginLeft: '65%'}} className='mr-auto'>
   

        {/* Register */}     
             <Nav.Link  style={{ marginTop:'2px' }}>
                   <Link className = "login" to='/login' style={{ color: 'gray'}}>
                      Feed
                  </Link>
             </Nav.Link>
             <Nav.Link  style={{ marginTop:'2px' }}>
                   <Link className = "users" to='/users' style={{ color: 'gray'}}>
                      Users
                  </Link>
             </Nav.Link>
             <Nav.Link  style={{ marginTop:'2px' }}>
                   <Link className = "profile" to='/profile' style={{ color: 'gray'}}>
                      Profile
                  </Link>
             </Nav.Link>              
         
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    );
  }
}
