
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
import logo_nav from './img/LOGO PARA SITE.png'
import { Link } from 'react-router-dom';

import { Trigger } from "./react-simple-offcanvas/src/Components/Trigger.tsx";
import { OffcanvasProvider } from "./react-simple-offcanvas/src/Context.tsx";
import { Offcanvas } from "./react-simple-offcanvas/src/Components/Offcanvas.tsx";

export const UseStyles = makeStyles((theme) => ({ 
    MenuButtonAtive:{
        '&:hover': {
            
            backgroundColor:'rgba(2, 8, 44, 0.2); ',
         },
        marginRight: theme.spacing(2),
        color: '#004F80;',
       
    },
    root:{
          flexGrow: 1,
    },
    MenuButton: {
           marginRight: theme.spacing(2),
           color: '#004F80;',
          

    },
    title: {
        flexGrow: 1,
        color: 'black',
       
    },
    appBarTransparent:{
        backgroundColor: 'rgba(255 ,255 ,255,1);',
     
        transition: 'all 900ms linear',
        
        
    },
    appBarSolid: {
    
        backgroundColor: 'rgba(255 ,255 ,255,1);',
        transition: 'all 900ms linear',
      

        '&:before':{
            backgroundImage: "url(" + backgroundNav + ")",
          },
    },
    Link:{
        '&:hover': {
            color:'#BC9C20;',
          
         },
        
        flexGrow: 1,
        color: '#004F80;',
    }


}));
export default function ButtonAppBar() {
    const classes = UseStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')

    const navRef = React.useRef();
    navRef.current = navBackground;
     // Callback function that is triggered when the Offcanvas is opened
 const handleOpen = () => {document.getElementById("App-header");
 var body = document.getElementsByClassName("App-header");
 var section = document.getElementsByClassName("section");
 var Section = document.getElementById("Section");
 var div_footer = document.querySelector("#div_footer");
 section[0].style.filter="blur(30px)";
 div_footer.style.filter="blur(30px)";
 var principal = document.getElementsByClassName("principal");
 principal[0].style.filter="blur(30px)";
}
 // Callback function that is triggered when the Offcanvas is closed
 const handleClose = () => {document.getElementById("App-header");

 var section = document.getElementsByClassName("section");
 var Section = document.getElementById("Section");
 var div_footer = document.querySelector("#div_footer");
 section[0].style.filter="none";
 var principal = document.getElementsByClassName("principal");
 principal[0].style.filter="none";
 div_footer.style.filter="blur(0px)";
}


    useEffect(()=>
    {
        const handleLoad = () =>{
            var avatar=document.getElementById("avatarPreview");
            document.addEventListener("load" ,avatar.setAttribute("src","https://1.bp.blogspot.com/-5cTUMBumKL4/YgZ4X5dNJnI/AAAAAAAAADs/jWycdT2EJ28i3aCUsTILFNMlrK7m_xrrACK4BGAYYCw/s35/Vedetta-Logomarca_Prancheta%25252B1.png"));
            var avatar1 = document.querySelector("#avatarPreview");
            avatar1.setAttribute("src","https://1.bp.blogspot.com/-5cTUMBumKL4/YgZ4X5dNJnI/AAAAAAAAADs/jWycdT2EJ28i3aCUsTILFNMlrK7m_xrrACK4BGAYYCw/s35/Vedetta-Logomarca_Prancheta%25252B1.png");
        }
    const handleScroll = () =>{
        const show = window.scrollY > 180;
        const show2 = window.scrollY > 1600.25; 
        const animationClass = "animate";
        var target = document.querySelectorAll('[data-anime]');
        const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
        var y = document.getElementsByClassName("hu");
      
        target.forEach(function(element){
      if((windowTop) > element.offsetTop)
      {
        element.classList.add(animationClass);
      }else{
          element.classList.remove(animationClass);
      } 
        })
        if(windowTop > 1600){
        y[0].style="animation:mymove2 2s;cursor: pointer;position: fixed;bottom: 25%;z-index: 1; background-color: #b6892d;left: -35px;padding: 4px;transition: all 600ms linear 600ms;transform: rotate(90deg);text-decoration: none;visibility:visible;";
       
        }
        else{
        
        y[0].style="animation:mymove 2s;cursor: pointer;position: fixed;bottom: 25%;z-index: 1; background-color: #b6892d;left: -35px;padding: 4px;transition: all 600ms linear 600ms;transform: rotate(90deg);text-decoration: none;visibility:hidden;";

}
        if(show){
            setNavBackground('appBarSolid')
        
        }else{
            setNavBackground('appBarTransparent')
        
           
            
        }
    }
 
   

    document.addEventListener("read" ,handleLoad);
    
        document.addEventListener('scroll',handleScroll)
        return () => {
            document.removeEventListener('scroll',handleScroll)
        }
    },[])
    return (
        <div className={classes.root}>
           
            <AppBar position="fixed"  className={classes[navRef.current]}>
                <Toolbar>  
                    <div className='tittle_espaco'>
                {/* <a href='#'>
                      <img src={Logo}></img>
                  </a>  */}
                    <Typography variant="h4" className={classes.title}>
                        <Link  to="/" id="grupo_"className="logo_vedetta">
                     <img className="img_nav" src={logo_nav}></img>
                        </Link>
                        
                    </Typography>
                    </div>
                    <div id="menu_no_t">
                        
                    <div className='tittle_espaco'>
                    <Typography variant="h7"  className={classes.title}>
                    <Link  to="/Servicos" className={classes.Link}>
                        SERVIÇOS
                    </Link>
                    </Typography>
                    </div>

                    <div className='tittle_espaco'>
                    <Typography variant="h7"  className={classes.title}>
                    <Link  to="/Quemsomos" className={classes.Link}>
                        QUEM SOMOS
                    </Link>
                    </Typography>
                    </div>
                    
                    <div className='tittle_espaco'>
                    <Typography variant="h7"  className={classes.title}>
                    <Link  to="/equipe" className={classes.Link}>
                        EQUIPE
                    </Link>
                    </Typography>
                    </div>

                    <div className='tittle_espaco'>
                    <Typography variant="h7" className={classes.title}>        
                      <Link  to="/Biblioteca" className={classes.Link}>
                      CONTEÚDO/BLOG
                    </Link>
                    
                    </Typography>
                    
                    </div>
                    </div>
                    <div className='tittle_espaco'>
                    
                    </div>
        <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                        
        <Trigger component={"div"}> 
             <div className='menu_togler' >
                        
                        <a  class="d-block m-3" date-bs-toggle="offcanvas" role="button" >
                            
                            <IconButton className={classes.MenuButtonAtive}
 >                     
        
                                <MenuIcon color="white"/>
                              
        
                            </IconButton>
                        </a>
                            </div>
                            </Trigger>
      
      <Offcanvas title="Menu">
        
                    <div >
                    <Typography variant="h5"Style="display:block;" className={classes.title}>
                        <Link   Style="color: white;
    text-decoration: none;
    display: block;
    
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;"to="/" >
                         Home
                        </Link>
                    </Typography>
                    <Typography variant="h7"Style="display:block;" className={classes.title}>
                        <Link   Style="color: white;
    text-decoration: none;
    display: block;
    
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;"to="/Servicos" >
                         SERVIÇOS
                        </Link>
                    </Typography>
                    <Typography variant="h7" Style="display:block;"  className={classes.title}>
                    <Link   Style="color: white;
    text-decoration: none;
    display: block;
    
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;"to="/Quemsomos" >
                        QUEM SOMOS
                    </Link>
                    </Typography>
                    </div>
                    <div >
                    <Typography variant="h7"Style="display:block;"  >
                    <Link  Style="color: white;
    text-decoration: none;
    display: block;
    
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;"to='/equipe' >
                      EQUIPE
                    </Link>
                    
                    </Typography>
                    
                    </div>
                    <div >
                    <Typography variant="h7" Style="display:block;" >
                    <Link  to="/Biblioteca"  Style="color: white;
    text-decoration: none;
    display: block;
    
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;"id="biblioteca_">
                        CONTEÚDO/BLOG
                    </Link> 
                    </Typography>
                  <Link to="/Formulario" > <input type="submit" value="Fale Conosco" Style="    margin-top: 75%;
    padding-left: 10%;
    padding-right: 10%;"  />
    </Link> 
                    </div>
                   </Offcanvas>
    </OffcanvasProvider>
                    </Toolbar>
            </AppBar>
        </div>
    );
}
