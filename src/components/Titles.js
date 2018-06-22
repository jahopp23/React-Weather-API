import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';


export default class Titles extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">What'sTheWeather?</NavbarBrand>
              
        
              </Navbar>
            </div>
          );
        }
      }