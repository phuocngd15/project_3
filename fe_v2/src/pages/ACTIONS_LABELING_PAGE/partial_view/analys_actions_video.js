import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button} from "reactstrap";
import {useHistory, useParams} from "react-router-dom";
import {cloneDeep} from "lodash";
import Select from "react-select";
import TimeField from 'react-simple-timefield';
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import useLocalStorage from "../../../hook/useLocalStorage";


export const Analys_actions_video = () => {
    return <SimpleTable></SimpleTable>
};

const SimpleTable = () => {
    const [numberRow, setNumberRow] = useState([<Row key={1} index={1}></Row>]);
    const history = useHistory();
    const addRow = () => {
        var count = cloneDeep(numberRow);
        var length = count.length + 1;
        count.push(<Row key={length} index={length}></Row>)
        setNumberRow(count);
    }
    const removeRow = () => {
        var count = cloneDeep(numberRow);
        var length = count.length + 1;
        count.pop();
        setNumberRow(count);
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right"
        }}>
            <div className="btn-group" style={{margin: "0 0 0.5rem auto"}}>
                <Button color={"primary"} outline onClick={addRow}>
                    + Row >
                </Button>
                <Button color={"danger"} outline onClick={removeRow}>
                    - Row >
                </Button>
            </div>
            <StyledTable>
                <thead style={{border: "2px solid #c3cfd9"}}>
                <tr>
                    <StyledTh>#</StyledTh>
                    <StyledTh>Start</StyledTh>
                    <StyledTh>End</StyledTh>
                    <StyledTh>Duration</StyledTh>
                    <StyledTh>Label</StyledTh>
                </tr>
                </thead>

                <tbody>
                {numberRow}
                </tbody>
            </StyledTable>

            <div style={{margin: "0.5rem 0 0.5rem auto"}}>
                <Button color={"primary"} onClick={() => history.push("/MODEL MANAGEMENT")}>
                    CREATE MODEL >
                </Button>
            </div>
        </div>)
}
const Row = ({index}) => {
    const [actions, saveActions] = useLocalStorage("actions");

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
    const [start, setStart] = useState('00:00:00')
    const [end, setEnd] = useState('00:00:00')
    const [durationTime, setDurationTime] = useState('00:00:00')

    const calculateDuration = (timeStart, timeEnd) => {
        if (timeStart <= timeEnd) {
            dayjs.extend(duration)
            const [hours, minutes, seconds] = timeEnd.split(":")
            var timeEnd = dayjs.duration({
                minutes: minutes,
                hours: hours,
                seconds: seconds
            });

            const [hours2, minutes2, seconds2] = timeStart.split(":")
            var timeStart = dayjs.duration({
                minutes: minutes2,
                hours: hours2,
                seconds: seconds2
            });
            var result = timeEnd.subtract(timeStart).format("HH:mm:ss").toString();
            console.log("result", result)
            setDurationTime(result);
        }
    }
    const calculateStart = (time) => {
        setStart(time);
        calculateDuration(time, end)
    }
    const calculateEnd = (time) => {
        setEnd(time);
        calculateDuration(start, time)
    }
    return (
        <tr>
            <StyledTd>{index}</StyledTd>
            <StyledTd>
                <TimeField value={start} onChange={(event, time) => {
                    calculateStart(time)
                }} style={{width: "72px", border: "none", background: "none"}} showSeconds/>
            </StyledTd>

            <StyledTd>
                <TimeField value={end} onChange={(event, time) => {
                    calculateEnd(time)
                }} style={{width: "72px", border: "none", background: "none"}} showSeconds/>
            </StyledTd>

            <StyledTd>
                <TimeField value={durationTime} disabled style={{width: "72px", border: "none", background: "none"}}
                           showSeconds/>
            </StyledTd>
            <StyledTd>
                <Select isMulti className="basic-multi-select" classNamePrefix="select"
                        options={mapActionsToOptionsList()}/>
            </StyledTd>
        </tr>
    )
}

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const StyledTh = styled.th`
  border: 2px solid #c3cfd9;
  text-align: center;
  padding: 8px;
`
const StyledTd = styled.td`
  border: 2px solid #c3cfd9;
  text-align: center;
  padding: 8px;
`
