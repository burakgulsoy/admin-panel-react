import React from "react";
import {
  Navbar,
  NavbarBrand,
  Button
} from "reactstrap";

export default class Navi extends React.Component {
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
        <Navbar
          className="my-2"
          color="secondary"
          dark
        >
          <NavbarBrand href="/">
            Admin Panel
          </NavbarBrand>


          <Button className="ml-auto">
            Logout
          </Button>
        </Navbar>

      </div>
    );
  }
}
