import { Button as MuiButton} from '@material-ui/core';
import React from 'react';

export default function Button(props) {
    const{text, size, color, variant, onClcik} = props;
    return (
        <MuiButton
        variant = {variant | "contained"}
        size = {size}
        color = {color}
        onClick = {onClcik}>
            {text}
        </MuiButton>
    )
}
