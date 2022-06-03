import React from "react";
import {SimpleUploadVideo} from "./partial_view/SimpleUploadVideo";
import {AnalysActionsVideo} from "./partial_view/AnalysActionsVideo";
import styled from "styled-components";

const ActionsLabelingPage = () => {
    return (
        <>
            <StyledContainer>
                <SimpleUploadVideo/>
                <AnalysActionsVideo/>
            </StyledContainer>
        </>
    );
};

export default ActionsLabelingPage;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 1rem;
`;