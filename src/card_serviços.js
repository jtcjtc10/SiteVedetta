
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "reactstrap";
import { Card, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
function Cardserviços (){


 
    return(
       

        <div className="cardserv">
        <style>
        {`
           .cardserv{
            
            }.list-group list-group-flush{
            background-color: #f0f8ff;
            
            }.list-group-item{
            background-color: #f0f8ff;
            font-style: italic
            }
            `}
            </style>

        <ul className="list-group list-group-flush">
        <li className="list-group-item">Gestão de Riscos e Adequação à LGPD</li>
        <li className="list-group-item">Consultoria e Assessoria Jurídica</li>
        <li className="list-group-item">Contencioso Jurídico</li>
        <li className="list-group-item">Consultoria e Assessoria em Gestão</li>
        <li className="list-group-item">Serviços em Gestão</li>
        <li className="list-group-item">Consultoria e Serviços em Marketing e Negócios</li>
        </ul>
    </div>

);    
}

export default Cardserviços;