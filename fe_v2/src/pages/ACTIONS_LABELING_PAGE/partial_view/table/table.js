import React from "react";
import { scrollbarWidth } from "../helper";
import { useBlockLayout, useTable } from "react-table";
import { FixedSizeList } from "react-window";
import styled from "styled-components";
import { EditableCell } from "./editable_cell";

export const Custom_Table = ({ columns, data, updateMyData }) => {
  // Use the state and functions returned from useTable to build your UI

  const defaultColumn = React.useMemo(
    () => ({
      width: 100,
      widthIndexColumn: 80,
      EditableCell: EditableCell
    }),
    []
  );

  const scrollBarSize = React.useMemo(() => scrollbarWidth(), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    totalColumnsWidth,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      updateMyData
    },
    useBlockLayout
  );

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({
            style
          })}
          className="tr">
          {row.cells.map(cell => {
            console.log(cell);
            if (cell.column.id == "actionLabel") {
              return <>{cell.render("EditableCell")}</>;
              return (
                <div {...cell.getCellProps()} className={"td"}>
                  {cell.render("EditableCell")}
                </div>
              );
            } else
              return (
                <div {...cell.getCellProps()} className={"td"}>
                  {cell.render("Cell")}
                </div>
              );
          })}
        </div>
      );
    },
    [prepareRow, rows]
  );

  // Render the UI for your table
  return (
    <Styles>
      <div {...getTableProps()} className="table tableWrap">
        <div>
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map(column => {
                return (
                  <div
                    {...column.getHeaderProps()} className={"th"}>
                    {column.render("Header")}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div {...getTableBodyProps()}>
          <FixedSizeList
            height={500}
            itemCount={rows.length}
            itemSize={30}
            width={totalColumnsWidth + scrollBarSize}>
            {RenderRow}
          </FixedSizeList>
        </div>
      </div>
    </Styles>
  );
};
const columnWidths = new Array(1000)

  .fill(true)

  .map(() => 75 + Math.round(Math.random() * 50));

const getItemSize = index => {
  console.log(index);
  return columnWidths[index];
};

const Styles = styled.div`
  padding: 1rem;
  max-width: 100%;
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }
  .table {
    width: fit-content;
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      //padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      width: 1%;
      

      :last-child {
        border-right: 1px solid black;
      }

      .editable-cell {
        width: inherit;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }

    .th {
      padding: 0.5rem;
    }
  }
`;
