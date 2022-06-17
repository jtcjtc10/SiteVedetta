

import Toolbar from '@material-ui/core/toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { AppBar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/button';
import { Navbar } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { UncontrolledDropdown } from 'reactstrap';
import { DropdownToggle } from 'reactstrap';
import { DropdownMenu } from 'reactstrap';
import { DropdownItem } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarText } from 'reactstrap';
import React, { useEffect, useState } from "react"
import { Style } from '@material-ui/icons';
import Logo from './img/Logo.jpg';
import backgroundNav from './img/Background-Nav.jpg';
import Biblioteca from './Biblioteca';
import logo_nav from './img/logo_auto_x2-removebg-preview.png'
import { Link } from 'react-router-dom';
import simple_offcanvas from'./simple_offcanvas';
import { Trigger } from "./react-simple-offcanvas/src/Components/Trigger.tsx";
import { OffcanvasProvider } from "./react-simple-offcanvas/src/Context.tsx";
import { Offcanvas } from "./react-simple-offcanvas/src/Components/Offcanvas.tsx";

export const UseStyles = makeStyles((theme) => ({ 
    MenuButtonAtive:{
        '&:hover': {
            
            backgroundColor:'rgba(2, 8, 44, 0.2); ',
         },
        marginRight: theme.spacing(2),
        color: 'white',
       
    },
    root:{
          flexGrow: 1,
    },
    MenuButton: {
           marginRight: theme.spacing(2),
           color: 'white',
          

    },
    title: {
        flexGrow: 1,
        color: 'black',
       
    },

    Link:{
        '&:hover': {
            color:'white',
            backgroundColor:'rgba(2, 8, 44, 0.2); ',
         },
        
        flexGrow: 1,
        color: 'white',
    }


}));
export default function ButtonAppBar() {
    const classes = UseStyles();
    
 const handleOpen = () => console.log("open");
 // Callback function that is triggered when the Offcanvas is closed
 const handleClose = () => console.log("close");
 

    return (
        
      <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
        <Trigger component={"div"}> 
             <div className='menu_togler' >
                
          <a href="#sidebar" class="d-block m-3" date-bs-toggle="offcanvas" role="button" arian-controls="sidebar">
                    
                <IconButton className={classes.MenuButtonAtive}
>                     

                    <MenuIcon color="white"/>
                  

                </IconButton>
            </a>
              </div>
          </Trigger>

      <Offcanvas />
    </OffcanvasProvider>
    );
}
