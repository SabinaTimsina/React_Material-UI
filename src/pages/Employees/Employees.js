import React from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <PageHeader
            title = "Page Header"
            subtitle = "Page description"
            icon = {<PeopleOutlineIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm/>
            </Paper>
        </React.Fragment>
    )
}
