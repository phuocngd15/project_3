import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {axiosGet} from "../../../axios/axios"
import dayjs from "dayjs";

export const BoardActions = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        let cancelled = false;
        (async () => {
            const reqModel = {
                url: 'http://localhost:9999/api/actions'
            };
            const response = await axiosGet(reqModel);
            if (!cancelled && response) {
                const {data} = response;
                console.log(data);
                setData(data);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    const renderListAction = (data) => {
        const renderRow = (row) => {
            return(
                <StyledArticle>
                    <div>Name: {row.name}</div>
                    <div>Description: {row.description}</div>
                    <div>Created Date: {dayjs(row.createdAt).format("HH:mm, DD-MM-YYYY")}</div>
                    <div>Status</div>
                </StyledArticle>
            )
        }
        return (
            <StyledCounter>
                {data.map(e => renderRow(e))}
            </StyledCounter>
        )
    }
    return renderListAction(data)
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