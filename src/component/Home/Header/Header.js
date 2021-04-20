import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../../App";
const Header = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const handleSignOut = () => {

    firebase.auth().signOut()
      .then(() => {
        const SignOutUser = {
          isSignIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          success: false
        }
        setLoggedInUser(SignOutUser);
      })
      .catch(err => {

      });
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link}  to="/" className="ml-5" style={{fontSize:'30px',lineHeight:'30px'}} > <span style={{color:"hotpink"}}>Digital</span> Agency</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="" style={{margin:'0 auto'}}>
          <Nav.Link as={Link} className='text-white pr-3' to="/home">Home</Nav.Link>
          <Nav.Link as={Link}  className='text-white pr-3' to="/dashboard">Dashboard</Nav.Link>
          {
            loggedInUser.isSignIn ? <button className='btn btn-success' onClick={handleSignOut}>LogOut</button> :
            <Nav.Link as={Link}  className='text-white pr-3' to="/login">Login</Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
