import React from "react";
import {SimpleUploadVideo} from "./partial_view/SimpleUploadVideo";
import {Analys_actions_video} from "./partial_view/analys_actions_video";
import styled from "styled-components";


const ACTIONS_LABELING_PAGE = () => {
    return (
        <>
            <StyledContainer>
                <SimpleUploadVideo/>
                <Analys_actions_video/>
            </StyledContainer>
        </>
    );
};

export default ACTIONS_LABELING_PAGE;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 1rem;
`;