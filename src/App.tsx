import React from 'react';
import './fonts.css';
import {Header, ItemHeader, TextHeader} from './AppStyled';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <Header>

        <ItemHeader>
          <FontAwesomeIcon style={{marginTop: '-5px' ,color:  '#f5f5f7', fontSize: '18px'}} icon={faApple}/>

        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>iPad</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Watch</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>AirPods</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>TV e Casa</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Só na Apple</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Acessórios</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Suporte</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon style={{color:  '#f5f5f7', fontSize: '15px', opacity: '0.8'}} icon={faMagnifyingGlass}/>

        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon style={{color:  '#f5f5f7', fontSize: '15px', opacity: '0.8'}} icon={faBagShopping}/>

        </ItemHeader>

        

      </Header>
      
    </>
  );
}

export default App;
