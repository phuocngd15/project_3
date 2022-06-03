import React from "react";
import {Button} from "reactstrap";

import {StyledTable, StyledTh, StyledTd} from "../action_labeling/partial_view/AnalysActionsVideo";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

export const ModelManagement = () => {
    const history = useHistory();
    return (
        <>
            <div className="d-flex flex-row-reverse bd-highlight ">
                <Button color="primary" onClick={() => history.push("/MODEL MANAGEMENT/MODEL CONFIGURATION")}>
                    ADD NEW MODEL
                </Button>
            </div>
            <StyledContainer>
                <StyledTable>
                    <thead>
                    <StyledTh>Model ID</StyledTh>
                    <StyledTh>Model Name</StyledTh>
                    <StyledTh>Actions </StyledTh>
                    <StyledTh>Created Date </StyledTh>
                    <StyledTh>Status</StyledTh>
                    </thead>
                    <tbody>
                    <tr>
                        <StyledTd>123</StyledTd>
                        <StyledTd>Model 1</StyledTd>
                        <StyledTd>
                            <span className="badge-pill badge-secondary"
                                  style={{
                                      backgroundColor: "#788896",
                                      color: "#fff",
                                      marginRight: "0.2rem"
                                  }}>Eating</span>

                            <span className="badge-pill badge-secondary"
                                  style={{
                                      backgroundColor: "#788896",
                                      color: "#fff",
                                      marginRight: "0.2rem"
                                  }}>Running</span>
                        </StyledTd>
                        <StyledTd></StyledTd>
                        <StyledTd>Training</StyledTd>
                    </tr>
                    </tbody>
                </StyledTable>
            </StyledContainer>
        </>
    )
}
const StyledContainer = styled.div`
  width: 60%;
  color: #0082ff;
`;