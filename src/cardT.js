import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CardGroup } from 'reactstrap';
import { Card } from 'reactstrap';
import { CardImg } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { CardText } from 'reactstrap';
import { Button } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import next from "./img/next.png";
import previous from "./img/previous.png";
/* export const UseStyles = makeStyles((theme) => ({ 
   cardHover:{
    marginRight: theme.spacing(2),
    color: 'white',
   }

})); */

function Cards() {
return ( 
  
  <div className='CardGroup' data-anime="left">
    
    <style>
    
        {`.card-title {
          color: Aquamarine;
          text-shadow: 3px 3px black;
                    }         
          .card-group{
         justify-content: center;
         border-radius: 3%;
         width: 100%;
         margin-top: 60px;
         margin-bottom: 60px;
                    }
          .card-text {
          color:white;
                    }
          .card{
            margin-right: 10px;
            margin-top: 10px;
            background: rgb(1,1,1,0);
            border-radius: 25px;
            width: 291px;
            height: 453px;
            transition: all 2ms;
           }
         .card-img-top{
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 20%;
          border-radius: 25px;
                  }
           .Card_conteiner{
            width: 296.667px;
            margin-right: 12px;
                    }
            .card-text{
            width: 250px;
            height: 350px;  
            box-sizing: border-box;
                 }        

           Card_conteiner:hover {
            width:150%;
            height:200%;
                    }
                    .cardss {
                  
    margin: 50px;
    width: 1200px;
     overflow: hidden; 
    height: 488px;
    margin-right: 20px;
    margin-left:10%;
    flex-flow: row;

                  }  
                  #next  
                    {
                      width: 64px;
                      position: absolute;
                      margin-top: 180px;
                       background-color: rgba(37, 42, 57,0.2);
                     
                    }
                    #previous{
                      width: 35px;
                      position: absolute;
                      margin-top: 178px;
                      margin-left: -40px;
                      background-color: rgba(37, 42, 57,0.2);
                     
                    }
                    #card_previous{
                      margin-right: -221px;
                      margin-top: -1px;
                      margin-bottom: 0;
                      /* overflow: hidden; */
                      padding: 0;
                      background-color: rgb(12, 17 ,44, 0);
                      margin-left: -10px;
                    }
                    .horve{
                      background-color:grey;
                    }
                    `               
           
                    }
      </style>
    <CardGroup className='cardss'>  
    <div >
      <a href="#"><img  id='previous' src={previous}/></a>
    </div>
    <CardGroup className='cardss' id="card_previous">
    <Typography variant="h4" 
    className='Titulos'
    >
    Cards
    </Typography>
    <div className = "Card_conteiner">
  <Card>

    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
  
    />
    
      <CardTitle tag="h5">
        Joao Victor Ferreira
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        color= "Gold"
      >
        Estagiario
      </CardSubtitle>
      <CardText>
          
      <div className='title-text-card'>
        <div className='title-text-text'>
        Testando
          </div>
        </div>
        <div className='title-text-conteudo'>
        The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
      </CardText>
     
    
  </Card>
  </div>      
      <div className = "Card_conteiner">
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
  
    />
    
      <CardTitle tag="h5">
        Joao Pedro
      </CardTitle>
      <CardSubtitle
        color= "red"
        className="mb-2 text-muted"
        tag="h6"
        color= "Gold"
      >
        Estagiario
      </CardSubtitle>
      <CardText>
           
        <div className='title-text-card'>
        <div className='title-text-text'>
        Testando
          </div>
        </div>
        <div className='title-text-conteudo'>
        The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
        </div>
      </CardText>
     
    
  </Card>
  </div>
  <div className = "Card_conteiner">
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100px"
    />
   
      <CardTitle tag="h5">
        Thiago souza
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        color= "Gold"
      >
        Estagiario
      </CardSubtitle>
      <CardText>
           
        <div className='title-text-card'>
        <div className='title-text-text'>
        Testando
          </div>
        </div>
        <div className='title-text-conteudo'>
        The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
      </CardText>
      
  </Card>
  </div>
  <div className = "Card_conteiner">
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100px"
    />
   
      <CardTitle tag="h5">
        Thiago souza
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        color= "Gold"
      >
        Estagiario
      </CardSubtitle>
      <CardText>
           
        <div className='title-text-card'>
        <div className='title-text-text'>
        Testando
          </div>
        </div>
        <div className='title-text-conteudo'>
        The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
      </CardText>
      
  </Card>
  </div>
  </CardGroup>
  <CardGroup className='cardss' id="card_next">
  <div className = "Card_conteiner">
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100px"
    />
   
      <CardTitle tag="h5">
        Thiago souza
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        color= "Gold"
      >
        Estagiario
      </CardSubtitle>
      <CardText>
           
        <div className='title-text-card'>
        <div className='title-text-text'>
        Testando
          </div>
        </div>
        <div className='title-text-conteudo'>
        The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
      </CardText>
      
  </Card>
  </div>
  <div className = "Card_conteiner">
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
   
    />
    
      <CardTitle tag="h5">
        Gustavo 
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        color= "Gold"
      >
        Estagiario
      </CardSubtitle>
      <CardText>
        
        <div className='title-text-card'>
        <div className='title-text-text'>
        Testando
          </div>
        </div>
        <div className='title-text-conteudo'>
        The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
      </CardText>
      
    
  </Card>
  </div>
</CardGroup> 
<div >
      <a  className="horve"href="#"><img id='next' src={next}/></a>
</div>

</CardGroup> 
</div>

      

    );
}

/* function next(){

}

function previous(){

}
 */


export default Cards;

