import React from "react";

export const EditableCell = props => {
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
