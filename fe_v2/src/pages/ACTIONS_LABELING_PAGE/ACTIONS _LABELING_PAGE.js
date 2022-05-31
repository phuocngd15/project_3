import React from "react";
import a from "./ACTIONS_LABELING_PAGE.scss";

import { SimpleUploadVideo } from "./partial_view/SimpleUploadVideo";
import { Analys_actions_video } from "./partial_view/analys_actions_video";
import {Button} from "reactstrap";
import { useHistory } from "react-router-dom";


const ACTIONS_LABELING_PAGE = () => {
    const history = useHistory();
  return (
    <>
      <SimpleUploadVideo />
      <Analys_actions_video />
        <Button color={"primary"} onClick={()=>{
            history.push("/MODEL MANAGEMENT");
        }}>
           CREATE MODEL >
        </Button>
    </>
  );
};

export default ACTIONS_LABELING_PAGE;
