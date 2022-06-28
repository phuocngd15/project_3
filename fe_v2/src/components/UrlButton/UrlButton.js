import React from 'react'
import {useHistory} from "react-router-dom";
import {Button} from "reactstrap";

const UrlButton = ({href, name="button"}) => {
    const history = useHistory();
    return (
            <Button color={"primary"} onClick={() => history.push(href)}>
                {name}
            </Button>
    )
}
const UrlText = ({href, name="text"}) => {
    const history = useHistory();
    return (
            <div color={"primary"} onClick={() => history.push(href)} style={{cursor: 'pointer'}}>
                {name}
            </div>
    )
}
export {
    UrlButton,
    UrlText
}