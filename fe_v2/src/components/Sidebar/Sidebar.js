import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem } from "../../actions/navigation.js";
import SofiaLogo from "../Icons/SofiaLogo.js";
import cn from "classnames";

const Sidebar = props => {
  const { activeItem = "", ...restProps } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false);

  useEffect(() => {
    if (props.sidebarOpened) {
      setBurgerSidebarOpen(true);
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false);
      }, 0);
    }
  }, [props.sidebarOpened]);

  return (
    <nav className={cn(s.root, { [s.sidebarOpen]: burgerSidebarOpen })}>
      <header className={s.logo}>
        <SofiaLogo />
        <span className={s.title}>Auto Train</span>
      </header>
      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={activeItem =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="ACTION MANAGEMENT"
          isHeader
          link="/ACTIONS MANAGEMENT"
          index="typography"
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="MODEL MANAGEMENT"
          isHeader
          link="/tables"
          index="tables"
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="VIDEO ANALYST"
          isHeader
          link="/notifications"
          index="notifications"
        />
{/*        <LinksGroup
          onActiveSidebarItemChange={activeItem =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="UI Elements"
          isHeader
          iconName={<i className={"eva eva-cube-outline"} />}
          link="/uielements"
          index="uielements"
          childrenLinks={[
            {
              header: "Charts",
              link: "/ui-elements/charts"
            },
            {
              header: "Icons",
              link: "/ui-elements/icons"
            },
            {
              header: "Google Maps",
              link: "/ui-elements/maps"
            }
          ]}
        />*/}
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
