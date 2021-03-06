import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {v4} from "uuid";
import "./Style.scss";
import useLocalStorage from "../../../hook/useLocalStorage";

export const AddNewAction = () => {
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {}
    } = useForm();
    const history = useHistory();
    const [actionsName, setActionsName] = React.useState([{}]);
    const [, saveActions] = useLocalStorage("actions");
    const ListRowActionInput = ({data}) => {
        const listItems = data.map(ele => (
            <div className={"row"} key={v4()}>
                <div className={"col-4"}>
                    <label>Name </label>
                    <input
                        className={"action-name"}
                        {...register(`${ele.keyActionName}`)}
                    />
                </div>

                <div className={"col"}>
                    <label>Description </label>
                    <input className={"action-name"} {...register(`${ele.keyDesName}`)} />
                </div>
            </div>
        ));
        return (
            <ul className={"list-actions"}>
                <div className="container">{listItems}</div>
            </ul>
        );
    };

    const onSubmit = data => {
        saveActions(data)
        history.push("/ACTIONS MANAGEMENT/ACTIONS LABELING");
    };

    return (
        <div>
            <div className="d-flex flex-row-reverse bd-highlight ">
                <Button color="primary" onClick={() => setOpen(true)}>
                    ADD NEW ACTION
                </Button>
            </div>

            <Modal isOpen={open} size="lg">
                <ModalHeader toggle={() => setOpen(false)}>
                    ADD NEW ACTION
                </ModalHeader>
                <form>
                    <ModalBody>
                        <ListRowActionInput data={actionsName}/>
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
                            }}>
                            Add Action
                        </Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type="submit"
                            color="primary"
                            onClick={handleSubmit(onSubmit)}>
                            Stat Labeling
                        </Button>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                    </ModalFooter>
                </form>
            </Modal>
        </div>

    );
};
