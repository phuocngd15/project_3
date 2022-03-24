import React, { useState } from "react";
import classnames from "classnames";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";
/* import * as Icons from "@material-ui/icons"; */
import "font-awesome/css/font-awesome.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "eva-icons/style/eva-icons.css";
import s from "./IconsPage.module.scss";

const IconsPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return <></>;
};

export default IconsPage;
