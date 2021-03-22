import { makeStyles, withStyles } from '@material-ui/core';
import React from 'react';

//Using makeStyles
// const useStyles = makeStyles({
//     sideMenu:{
//         display:'flex',
//         flexDirection:'column',
//         position:'absolute',
//         left:'0px',
//         width:'320px',
//         height:'100%',
//         backgroundColor:'#253053'
//     }
// })

// export default function SideMenu() {
//     const classes = useStyles();
//     console.log("classes", classes)
//     return (
//         <div className={classes.sideMenu}>
            
//         </div>
//     )
// }

//Using withStyles
const style = {
    sideMenu:{
        display:'flex',
        flexDirection:'column',
        position:"absolute",
        left:'0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
}

const SideMenu = (props) =>{
    const {classes} = props;
    return(
        <div className={classes.sideMenu}>
        </div>
    )
}

export default withStyles(style)(SideMenu);