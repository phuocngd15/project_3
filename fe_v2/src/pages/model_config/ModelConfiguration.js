import React, {useState} from "react";
import Toggle from 'react-toggle'
import "./toggle.scss"
import {cloneDeep} from "lodash";

const ModelConfiguration = () => {
    const [hiddenAdvanced, setHiddenAdvanced] = useState(true);
    return (<div>ModelConfiguration
        <div>
            <span>ADVANCED</span>
            <Toggle
                defaultChecked={false}
                icons={false}
                onChange={(e) => {
                    setHiddenAdvanced(!cloneDeep(e.target.checked))
                }}/>
            <div hidden={hiddenAdvanced}>
                show
            </div>
        </div>
    </div>)
}

export {
    ModelConfiguration
}