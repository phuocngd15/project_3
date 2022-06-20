import React, {useState} from "react";
import Toggle from 'react-toggle'
import "./toggle.scss"
import {cloneDeep} from "lodash";
import styled from "styled-components";
import Select from "react-select";
import {Button} from "reactstrap";
import {useHistory} from "react-router-dom";
const ModelConfiguration = () => {
    const defaultShowConfigAdvanced = false;
    const [showConfigAdvanced, setShowAdvanced] = useState(defaultShowConfigAdvanced);
    const history =useHistory();
    return (<div>
        ModelConfiguration
        <BasicConfig/>
        <div>
            <h4>ADVANCED</h4>
            <Toggle
                defaultChecked={defaultShowConfigAdvanced}
                icons={false}
                onChange={() => {
                    const state = cloneDeep(showConfigAdvanced);
                    setShowAdvanced(!state)
                }}/>
            {showConfigAdvanced && <AdvancedConfig/>}
        </div>
        <div>
            <div className="d-flex flex-row-reverse bd-highlight ">
                <Button color="primary" onClick={() => history.push("/VIDEO ANALYTICS")}>
                     VIDEO ANALYTICS {">"}
                </Button>
                <Button color="primary" onClick={() => history.push("/MODEL MANAGEMENT")}>
                    {"<"}  MODEL MANAGEMENT
                </Button>
            </div>
        </div>
    </div>)
}


const BasicConfig = () => {
    const modelOptions = [
        {value: "model1", label: 'Model1'},
        {value: "model2", label: 'Model2'},
    ];
    return (
        <ContainerGridColumn>
            <div>
                <h6>Select Model</h6>
                <Select className="basic-multi-select" classNamePrefix="select"
                        options={modelOptions}/>
            </div>
            <div>
                <h6>Number of Actions</h6>
                <Select className="basic-multi-select" classNamePrefix="select"
                        options={modelOptions}/>
            </div>
            <ContainerGrid>
                <div>
                    <h6>Number of GPUs</h6>
                    <Select className="basic-multi-select" classNamePrefix="select"
                            options={modelOptions}/>
                </div>
                <div>
                    <h6>Train batch size</h6>
                    <Select className="basic-multi-select" classNamePrefix="select"
                            options={modelOptions}/>
                </div>
                <div>
                    <h6>Test batch size</h6>
                    <Select className="basic-multi-select" classNamePrefix="select"
                            options={modelOptions}/>
                </div>
            </ContainerGrid>
        </ContainerGridColumn>
    )
}


const AdvancedConfig = () => {
    const enableOptions = [
        {value: true, label: 'True'},
        {value: false, label: 'False'},
    ];
    const dataSetOptions = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    return (
        <ContainerGridColumn>
            <div>
                <h5>TRAIN</h5>
                <ContainerGrid>
                    <div> Enable <Select className="basic-multi-select" classNamePrefix="select"
                                         options={enableOptions}/>
                    </div>
                    <div> DataSet <Select className="basic-multi-select" classNamePrefix="select"
                                          options={dataSetOptions}/>
                    </div>
                    <div> Batch size <Select className="basic-multi-select" classNamePrefix="select"
                                             options={dataSetOptions}/>
                    </div>
                    <div> Eval period <Select className="basic-multi-select" classNamePrefix="select"
                                              options={dataSetOptions}/>
                    </div>
                    <div> Checkpoint period <Select className="basic-multi-select" classNamePrefix="select"
                                                    options={dataSetOptions}/>
                    </div>
                    <div> Auto resume <Select className="basic-multi-select" classNamePrefix="select"
                                              defaultValue={enableOptions[0]}
                                              options={enableOptions}/>
                    </div>
                </ContainerGrid>
            </div>
            <div>
                <h5>Data</h5>
                <ContainerGrid>
                    <div> Enable <Select className="basic-multi-select" classNamePrefix="select"
                                         options={enableOptions}/>
                    </div>
                    <div> DataSet <Select className="basic-multi-select" classNamePrefix="select"
                                          options={dataSetOptions}/>
                    </div>
                    <div> Batch size <Select className="basic-multi-select" classNamePrefix="select"
                                             options={dataSetOptions}/>
                    </div>
                    <div> Eval period <Select className="basic-multi-select" classNamePrefix="select"
                                              options={dataSetOptions}/>
                    </div>
                    <div> Checkpoint period <Select className="basic-multi-select" classNamePrefix="select"
                                                    options={dataSetOptions}/>
                    </div>
                    <div> Auto resume <Select className="basic-multi-select" classNamePrefix="select"
                                              defaultValue={enableOptions[0]}
                                              options={enableOptions}/>
                    </div>
                </ContainerGrid>
            </div>
            <div>
                <h5>SLOWFAST</h5>
                <ContainerGrid>
                    <div> Enable <Select className="basic-multi-select" classNamePrefix="select"
                                         options={enableOptions}/>
                    </div>
                    <div> DataSet <Select className="basic-multi-select" classNamePrefix="select"
                                          options={dataSetOptions}/>
                    </div>
                    <div> Batch size <Select className="basic-multi-select" classNamePrefix="select"
                                             options={dataSetOptions}/>
                    </div>
                    <div> Eval period <Select className="basic-multi-select" classNamePrefix="select"
                                              options={dataSetOptions}/>
                    </div>
                    <div> Checkpoint period <Select className="basic-multi-select" classNamePrefix="select"
                                                    options={dataSetOptions}/>
                    </div>
                    <div> Auto resume <Select className="basic-multi-select" classNamePrefix="select"
                                              defaultValue={enableOptions[0]}
                                              options={enableOptions}/>
                    </div>
                </ContainerGrid>
            </div>
            <div><h5>NONLOCAL</h5>
                <ContainerGrid>
                    <div> Enable <Select className="basic-multi-select" classNamePrefix="select"
                                         options={enableOptions}/>
                    </div>
                    <div> DataSet <Select className="basic-multi-select" classNamePrefix="select"
                                          options={dataSetOptions}/>
                    </div>
                    <div> Batch size <Select className="basic-multi-select" classNamePrefix="select"
                                             options={dataSetOptions}/>
                    </div>
                    <div> Eval period <Select className="basic-multi-select" classNamePrefix="select"
                                              options={dataSetOptions}/>
                    </div>
                </ContainerGrid>
            </div>
        </ContainerGridColumn>)
}
const ContainerGridColumn = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 2rem;
  // fle;
`
const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 4rem;
  grid-row-gap: 1rem;
`

export {
    ModelConfiguration,
    ContainerGridColumn,
    ContainerGrid
}