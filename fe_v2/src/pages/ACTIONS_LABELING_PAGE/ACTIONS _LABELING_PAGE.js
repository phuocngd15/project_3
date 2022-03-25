import React from "react";
import a from "./ACTIONS_LABELING_PAGE.scss";

import { SIMPLE_VIDEO_PLAYER } from "./partialView/SIMPLE_VIDEO_PLAYER";
import { Analys_actions_video } from "./partialView/analys_actions_video";

const ACTIONS_LABELING_PAGE = () => {
  return (
    <>
      <SIMPLE_VIDEO_PLAYER />
      <Analys_actions_video />
    </>
  );
};

export default ACTIONS_LABELING_PAGE;
