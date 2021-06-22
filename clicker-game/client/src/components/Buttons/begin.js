import React from "react";

// React front end styling provided by Material-UI
import { Button } from '@material-ui/core';

export function BeginBtn(props) {
    return (
        <Button color="primary">{props.info}</Button>
    );
}