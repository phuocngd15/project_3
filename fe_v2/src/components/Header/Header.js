import React  from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { closeSidebar, openSidebar } from "../../actions/navigation";
import MenuIcon from "../Icons/HeaderIcons/MenuIcon";


import s from "./Header.module.scss";
import "animate.css";

const Header = props => {
  const toggleSidebar = () => {
    if (props.sidebarOpened) {
      props.dispatch(closeSidebar());
    } else {
      const paths = props.location.pathname.split("/");
      paths.pop();
      props.dispatch(openSidebar());
    }
  };

  return (
    <Navbar className={`${s.root} d-print-none`}>
      <div>
        <NavLink
          onClick={() => toggleSidebar()}
          className={`d-md-none mr-3 ${s.navItem}`}
          href="#">
          <MenuIcon className={s.menuIcon} />
        </NavLink>
      </div>
      <Nav className="ml-auto">
        <NavItem className="d-sm-none mr-4">

        </NavItem>
      </Nav>
    </Navbar>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic
  };
}

export default withRouter(connect(mapStateToProps)(Header));
