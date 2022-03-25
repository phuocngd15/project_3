import React from "react";
import { useTable, useBlockLayout } from "react-table";
import { FixedSizeList } from "react-window";
import namor from "namor";
import styled from "styled-components";
import { makeData, scrollbarWidth } from "./helper";

export const Analys_actions_video = () => {
  const [data, setData] = React.useState(() => makeData(20));
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
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
  console.log("data",data)
  return (
    <Styles>
      <Table columns={columns} data={data} updateMyData={updateMyData} />
    </Styles>
  );
};
const EditableCell = props => {
  const {
    value: initialValue,
    row: { index },
    cell: { getCellProps },
    column: { id },
    updateMyData // This is a custom function that we supplied to our table instance
  } = props;
  //console.log("prop", props);
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      {...getCellProps()}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={"editable-cell td"}
    />
  );
};
const Table = ({ columns, data, updateMyData }) => {
  // Use the state and functions returned from useTable to build your UI

  const defaultColumn = React.useMemo(
    () => ({
      width: 150,
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
            if (cell.column.id == "actionLabel") {
              return <>{cell.render("EditableCell")}</>;
              return (
                <div {...cell.getCellProps()} className="td">
                  {cell.render("EditableCell")}
                </div>
              );
            } else
              return (
                <div {...cell.getCellProps()} className="td">
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
    <div {...getTableProps()} className="table">
      <div>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className="th">
                {column.render("Header")}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()}>
        <FixedSizeList
          height={500}
          itemCount={rows.length}
          itemSize={35}
          width={totalColumnsWidth + scrollBarSize}>
          {RenderRow}
        </FixedSizeList>
      </div>
    </div>
  );
};

const Styles = styled.div`
  padding: 1rem;

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
