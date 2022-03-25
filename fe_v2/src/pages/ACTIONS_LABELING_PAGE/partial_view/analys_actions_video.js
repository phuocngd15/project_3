import React from "react";
import { useTable, useBlockLayout } from "react-table";
import { FixedSizeList } from "react-window";
import namor from "namor";
import styled from "styled-components";
import { makeData, scrollbarWidth } from "./helper";
import { Custom_Table } from "./table/table";

export const Analys_actions_video = () => {
  const [data, setData] = React.useState(() => makeData(20));
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        collapse: true,
        accessor: (row, i) => i + 1
      },
      {
        Header: "Start",
        accessor: "timeStart"
      },
      {
        Header: "End",
        accessor: "timeEnd"
      },
      {
        Header: "Duration",
        accessor: "timeDuration"
      },
      {
        Header: "Label",
        accessor: "actionLabel"
      }
    ],
    []
  );

  //  const data = React.useMemo(() => makeData(20), []);
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    //setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value
          };
        }
        return row;
      })
    );
  };
  return (
    <Custom_Table columns={columns} data={data} updateMyData={updateMyData} />
  );
};
