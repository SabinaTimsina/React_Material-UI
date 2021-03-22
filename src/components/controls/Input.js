import { TextField } from '@material-ui/core';
import React from 'react';

export default function Input(props) {

    const {name, label, value, onChange} = props;
    return (
        <TextField 
                    name = {name}
                    label = {label}
                    variant = "outlined"
                    value = {value}
                    onChange = {onChange}
                    />
                    
    )
}
