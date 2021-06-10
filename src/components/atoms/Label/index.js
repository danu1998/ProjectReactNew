import React from 'react'
import {TextLabel, InputLabel} from "./LabelElement"

const Label = ({textLabel, ...rest}) => {
    return (
        <div>
            <TextLabel>
            {textLabel}
            </TextLabel>
            <InputLabel {...rest} />
        </div>
    )
}

export default Label
