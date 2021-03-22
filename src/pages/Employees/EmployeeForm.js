import { Grid } from '@material-ui/core';
import React from 'react';
import Controls from '../../components/controls/Controls';
import {useForm, Form} from '../../components/useForm';
import getDepartment from '../../services/employeeService';

const genderItems = [
    {
        id: 'male',
        title: 'Male',

    },
    {
        id: 'female',
        title: 'Female',

    },
    {
        id: 'other',
        title: 'Other',

    },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm() {
    const{values, setValues, handleInputChange} = useForm(initialFValues);

    // useEffect(()=>{

    // },[x])

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label = "Full Name"
                        name = "fullName"
                        value = {values.fullName}
                        onChange = {handleInputChange}
                    />
                    <Controls.Input
                    name = "email"
                    label = "Email"
                    value = {values.email}
                    onChange = {handleInputChange}
                    />
                    <Controls.Input
                    name = "mobile"
                    label = "Mobile"
                    value = {values.mobile}
                    onChange = {handleInputChange}
                    />
                    <Controls.Input
                    name = "city"
                    label = "City"
                    value = {values.city}
                    onChange = {handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                    name = "gender"
                    value = {values.gender}
                    onChange = {handleInputChange}
                    label = "Gender"
                    items = {genderItems}
                    />
                    <Controls.Select
                        name = "departmentId"
                        label = "Department"
                        value = {values.departmentId}
                        onChange={handleInputChange}
                        options = {getDepartment()}
                    />
                    <Controls.DatePicker
                        name = "hireDate"
                        label = "Hire Date"
                        value = {values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name = "isPermanent"
                        label = "Permanent Employee"
                        value = {values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            color = "primary"
                            size = "large"
                            text = "Submit"
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
