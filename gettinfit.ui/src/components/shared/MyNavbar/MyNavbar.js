import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import authData from '../../../helpers/data/authData';

import firebase from 'firebase/app';
import 'firebase/auth';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
    state = {
        isOpen: true,
    }

    

    logMeOut = (e) => {
      const { user } = this.state;
      e.preventDefault();
      firebase.auth().signOut();
      authData.logoutUser(user)
    };

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

   
    render() {
        const { isOpen } = this.state;
        const showLogout = () => {
          const { authed } = this.props;
          if (authed) {
              return (
                  <NavItem>
                      <NavLink className="navbar-links" onClick={this.logMeOut}>Logout</NavLink>
                  </NavItem>
              )
            }
          };

                return(
                    <div className="MyNavbar">
                      <Navbar color="dark" dark expand="md">
                        <NavbarBrand to="/home">GettinFit</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="navbar-links" tag={RRNavLink} to='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/workout'>Workout</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/userProfile'>User Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbar-links" tag={RRNavLink} to='/meals'>Meals</NavLink>
                       </NavItem>
                      <NavItem>
                            <NavLink className="navbar-links" tag={RRNavLink} to='/login'>LogIn</NavLink>
                      </NavItem>
                     {showLogout()}
                     </Nav>
                    </Collapse>
                </Navbar>
            </div>
                 )
                }
              }
            
          
            
            export default MyNavbar;