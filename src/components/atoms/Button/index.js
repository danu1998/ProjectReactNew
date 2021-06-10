import React from 'react'
import {Btn} from "./ButtonElement"

const Button = ({labelBtn}) => {
    return (
        <div>
            <Btn>
                {labelBtn}
            </Btn>            
        </div>
    )
}

export default Button
