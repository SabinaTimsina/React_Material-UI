import SideMenu from '../components/SideMenu';
import React from 'react';
import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Header from '../components/Header';
import Employees from '../pages/Employees/Employees';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
  palette:{
      primary:{
          main: "#333996",
          light: "#3c44b126"
      },
      secondary: {
          main: "#f83245",
          light: "#f8324526",
      },
      background:{
        default: 'f4f5fd'
      }
  },
  shape:{
    borderRadius:'12px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform: 'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple: true
    }
  }
})

const UseStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = UseStyles();
  return (
    <ThemeProvider theme = {theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
  // return (
  //   <BrowserRouter>
  //     <Navbar/>
  //   </BrowserRouter>
  // )
}
export default App;
