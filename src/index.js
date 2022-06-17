
import ReactDOM from 'react-dom';
import './index.css';
import Pagina_principal from './Pagina_principal';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './route';
//index.js

 
ReactDOM.render(
  
  <BrowserRouter>
     <Rotas/>
  </BrowserRouter>,
  
  document.getElementById('root'),
  
);


reportWebVitals();
