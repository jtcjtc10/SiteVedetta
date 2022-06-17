import React,{useEffect} from "react";
import Pagina_principal from './Pagina_principal';
import {Quemsomos} from "./Quemsomos";
import {Servicos} from "./Servicos";
import {Biblioteca} from "./Biblioteca";
import { Routes,Route,useLocation } from "react-router-dom";
import { Institucional } from "./Institucional";
import { Blog } from "./Blog";
import { useLayoutEffect } from 'react'
import {Artigo_2} from './artigo_2'
import {Artigo_3} from './artigo_3'
import {Formulario1} from './Form1';
import {Formulario_leads} from './formulario_leads';
import {Formulario2} from './trabalheconosco';
import {Equipe} from './equipe.js';
const Wrapper = ({children}) => {


  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 1);
   
  }, [location.pathname]);
  return children
} 

const Component = ({title}) => {
  return (
    <div>
      <p style={{paddingTop: '150vh'}}>{title}</p>
    </div>
  )
}

export const Rotas = () => {
  

    return (
      <Wrapper>
      <Routes>
          <Route path="/" element={<Pagina_principal/>} exact />
          <Route path="/Quemsomos" element={<Quemsomos/>} />
          <Route path="/Biblioteca" element={<Biblioteca/>} />
          <Route path="/Servicos" element={<Servicos/>} />
          <Route path="/Institucional" element={<Institucional/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Artigo2" element={<Artigo_2/>}/>
          <Route path="/Artigo3" element={<Artigo_3/>}/>
          <Route path="/Formulario" element={<Formulario1/>}/>
          <Route path="/Formulario_leads" element={<Formulario_leads/>}/>
          <Route path="/trabalheconosco" element={<Formulario2/>}/>
          <Route path="/equipe" element={<Equipe/>}/>
      </Routes>
      </Wrapper>
 

    )
}

