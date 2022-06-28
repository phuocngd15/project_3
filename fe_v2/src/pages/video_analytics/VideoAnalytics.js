import React from 'react';
import {Button, Input} from "reactstrap";
import {SimpleUploadVideo} from "../action_labeling/partial_view/SimpleUploadVideo";
import {ContainerGridColumn} from "../model_config/ModelConfiguration";
import Select from "react-select";
import useLocalStorage from "../../hook/useLocalStorage";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {StyledTable, StyledTd, StyledTh} from "../action_labeling/partial_view/AnalysActionsVideo";
import {UrlButton, UrlText} from "../../components/UrlButton/UrlButton";

const VideoAnalytics = () => {
    const {
        register,
        handleSubmit,
        formState: {}
    } = useForm();
    const modelOptions = [
        {value: "model1", label: 'Model 1'},
        {value: "model2", label: 'Model 2'},
    ];

    const [actions] = useLocalStorage("actions");

    const mapActionsToOptionsList = () => {
        const options = [];

        for (const [key, value] of Object.entries(actions)) {
            console.log(`${key}: ${value}`);
            if (!key.includes("des_actionName")) {
                options.push({
                    value: key,
                    label: value
                })
            }
        }
        return options;
    }
    return (
            <ContainerGridColumn>
                <div className="d-flex flex-row-reverse bd-highlight ">
                    <Button color="primary" onClick={() => {
                    }}>
                        ADD VIDEO
                    </Button>
                </div>
                <StyledContainer>
                    <div>Dra & Drop your files here</div>
                    <SimpleUploadVideo buttonName={"Browse File"}/>
                    <Input
                            className="input-transparent pl-3"
                            {...register(`urlString`)}
                            placeholder="Enter input Url"
                    />
                    <ContainerGrid>
                        <div> Model <Select className="basic-multi-select" classNamePrefix="select"
                                            options={modelOptions}/>
                        </div>
                        <div> Actions <Select isMulti={true} className="basic-multi-select" classNamePrefix="select"
                                              options={mapActionsToOptionsList()}/>
                        </div>
                    </ContainerGrid>
                </StyledContainer>
                <StyledContainerTable>
                    <StyledTable>
                        <thead>
                        <StyledTh>Video Name</StyledTh>
                        <StyledTh>Model</StyledTh>
                        <StyledTh>Actions</StyledTh>
                        <StyledTh>Status</StyledTh>
                        <StyledTh></StyledTh>
                        </thead>
                        <tbody>
                        <tr>
                            <StyledTd>FPT 1</StyledTd>
                            <StyledTd>ABC</StyledTd>
                            <StyledTd>
                            <span className="badge-pill badge-secondary"
                                  style={{
                                      backgroundColor: "#788896",
                                      color: "#fff",
                                      marginRight: "0.2rem"
                                  }}>Tag</span>

                                <span className="badge-pill badge-secondary"
                                      style={{
                                          backgroundColor: "#788896",
                                          color: "#fff",
                                          marginRight: "0.2rem"
                                      }}>Tag</span>
                            </StyledTd>
                            <StyledTd>
                                <span className="badge-pill badge-success"
                                      style={{
                                          color: "#fff",
                                          marginRight: "0.2rem"
                                      }}>Done</span>
                            </StyledTd>
                            <StyledTd>
                                <i className="eva eva-download-outline"></i>
                                <UrlText href={"/RESULT"} name={"DOWNLOAD RESULTS"}/>
                            </StyledTd>
                        </tr>
                        </tbody>
                    </StyledTable>
                </StyledContainerTable>
                <div>
                    <div> Videos <Select isMulti={true} className="basic-multi-select" classNamePrefix="select"
                                          options={modelOptions}/>
                    </div>
                    <UrlButton href={"/SUMMARY"} name={"Generate Dashboard"}/>
                </div>
            </ContainerGridColumn>)
}


const StyledContainer = styled.div`
  border: solid 2px #c3cfd9;
  height: 20rem;
  display: grid;
  grid-template-columns: auto;
`;
const StyledContainerTable = styled.div`
  width: 60%;
  color: #0082ff;
`;
const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 4rem;
  grid-row-gap: 1rem;
`
export {
    VideoAnalytics
}