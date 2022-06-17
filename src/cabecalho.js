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
import ButtonAppBar from "./ButtonAppBar";
import UseStyles from "./ButtonAppBar";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';
import { browserHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';
const navbar = props =>{
const history = useNavigate();
 function handleSubmit(e) {
    e.preventDefault();
 
 history("/Formulario");

return (
<Navigate to="/Formulario" replace={true} />
)
  }


  const classes = UseStyles();
  return(
   
   <div className="navgator">
     <style>
       {
         
         `
         navgator{
          background-color:rgba(67,129,168,0.5);
           
         }
      
         `
       }
     </style>
 <div onClick={handleSubmit}  onSubmit={handleSubmit}   data-anime="left" Style='
visibility:hidden;
    transition: all 1s linear;
    background-color: #b6892d;
    ' className="animate hu"> <a  onClick={handleSubmit}  onSubmit={handleSubmit}   Style="
    text-decoration: none;
    color: white;
    background-color: #b6892d;
">Fale Conosco</a></div>
     <ButtonAppBar/>
</div>
  );
}


export default navbar;
