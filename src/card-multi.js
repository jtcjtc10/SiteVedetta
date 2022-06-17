import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Typography } from "@material-ui/core";
import { Container } from "reactstrap";



export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Container className="cardss2 color"  id="slid_card" >
      <Slider {...settings}>
 <div className='card2' >
    
    <style>
    
        {`.s2{ 
           width: 1200px;
        
           height: 488px;
           margin-right: 20px;
           margin-left: 10%;
           flex-flow: row;
           margin-right: auto;
           margin-left: 0px;
           margin-top: 0px;
           margin-bottom: 0;
           justify-content: center;
           border-radius: 3%;
           display: flex;

          }

            .color{
            background-color: rgba(2, 8, 44, 0.5);
     
        }
        .card-title {
          color: Aquamarine;
          text-shadow: 3px 3px black;
                    }         
          .card-group{
         justify-content: center;

         width: 100%;
         margin-top: 60px;
         margin-bottom: 60px;
                    }
          .card-text {
          color:white;
                    }
          .card{
            margin-right:10px;
            margin-top: 10px;
            background:rgb(1,1,1,0);
            border-radius: 25px;
            width:265px;
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
.cardss2{
                  margin: 50px;
                  width: 1200px;
                  height: 488px;
                  margin-right: 20px;
                  margin-left:10%;
                  flex-flow: row;
                  padding-left:10px;
                  padding-right:10px;
                  padding-top:0;
                  padding-botton:0;
}
                  .card2{
                    background-color: rgba(4, 8, 39, 0);
                    padding: 20px;
                    display: flex;
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
                     
                    }.slick-list {
                      position: relative;
                      display: block;
                      margin: 0;
                      padding: 0;
                      overflow-x: clip;
                      overflow-y: visible;
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
    <div className='s2'>  
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
  </div>
</div>
        <div>
        <div className='s2'>  
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
        </div>
        </div>
        <div>
        <div className='s2'>  
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
        </div>
        </div>
        <div>
        <div className='s2'>  
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
        </div>
        </div>
      
         
        
        
      
        
      </Slider>
      </Container>
    );
  }