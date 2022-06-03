import React from "react";
import styled from "styled-components";

export const BoardActions = () => {
    return (
            <StyledCounter>
                <StyledArticle>
                    <div>Running</div>
                    <div>Description</div>
                    <div>Created Date</div>
                    <div>Status</div>
                </StyledArticle>
                <StyledArticle>
                    <div>Running</div>
                    <div>Description</div>
                    <div>Created Date</div>
                    <div>Status</div>
                </StyledArticle>
                <StyledArticle>
                    <div>Running</div>
                    <div>Description</div>
                    <div>Created Date</div>
                    <div>Status</div>
                </StyledArticle>
            </StyledCounter>
    );
};
const StyledCounter = styled.div`
  gap: 2rem;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  display: grid;
`;

const StyledArticle = styled.div`
  background-color: #fff;;
  flex-direction: column;
  height: 100%;
  display: flex;
  position: relative;
  padding: .5rem;
  border: 2px solid #c3cfd9;
`;