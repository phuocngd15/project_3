import React from 'react'
import {Button} from "reactstrap";
import {SimpleUploadVideo} from "../action_labeling/partial_view/SimpleUploadVideo";
import {ContainerGrid, ContainerGridColumn} from "../model_config/ModelConfiguration";
import Select from "react-select";
import useLocalStorage from "../../hook/useLocalStorage";
import styled from "styled-components";

const VideoAnalytics = () => {
    const modelOptions = [
        {value: "model1", label: 'Model 1'},
        {value: "model2", label: 'Model 2'},
    ];
    const actionsOptions = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
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
                    ADD NEW MODEL
                </Button>
            </div>
            <div>
                <div>Dra & Drop your files here</div>
                <SimpleUploadVideo/>
                <ContainerGrid>
                    <div> Model <Select className="basic-multi-select" classNamePrefix="select"
                                         options={modelOptions}/>
                    </div>
                    <div> Actions <Select  isMulti={true} className="basic-multi-select" classNamePrefix="select"
                                          options={mapActionsToOptionsList()}/>
                    </div>
                </ContainerGrid>
            </div>
        </ContainerGridColumn>)
}

export {
    VideoAnalytics
}