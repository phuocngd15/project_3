import React, { useState } from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";


export const ADD_NEW_ACTION = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const history = useHistory();
  const [actionsName, setActionsName] = React.useState([]);

  console.log(watch("example")); // you can watch individual input by pass the name of the input
  const listInput = ({ data }) => {
    const listItems = data.map((ele) => (
      <li key={v4()}>
        {
          <>
            <label>Name </label>
            <input {...register(`${ele.keyActionName}`)} />
            <label>Description </label>
            <input {...register(`${ele.keyDesName}`)} />
          </>
        }
      </li>
    ));
    return <ul>{listItems}</ul>;
  };

  function handleClick() {
    history.push("/ACTIONS MANAGEMENT/ACTIONS LABELING");
  }
  const onSubmit = (data) => {
    console.log(data);
  }; 

  return <>
    <div>
      <div className="d-flex flex-row-reverse bd-highlight ">
        <Button
          color="primary"
          onClick={() => setOpen(true)}
        >
          ADD NEW ACTION
        </Button>
      </div>

      <Modal
        isOpen={open}
      >
        <ModalHeader toggle={() => setOpen(false)}>
          ADD NEW ACTION
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            {listInput({ data: actionsName })}

            {errors.exampleRequired && <p>This field is required</p>}
            <Button
              color="primary"
              onClick={() => {
                const newKey = actionsName.length + 1;
                const newListActionName = [
                  ...actionsName,
                  ...[
                    {
                      keyActionName: `actionName_${newKey}`,
                      name: "",
                      keyDesName: `des_actionName_${newKey}`,
                      des: ""
                    }
                  ]
                ];
                setActionsName(newListActionName);
              }}
            >
              Add action
            </Button>
            <input type="submit" />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={handleClick}
          >
            Stat Labeling
          </Button>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div></>
}