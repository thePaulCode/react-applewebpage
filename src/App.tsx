import React, { useState } from 'react';
import './fonts.css';
import {Header, ItemHeader, TextHeader, NavItems, ItemsApple, TextItems, ImageAppleItems, NovoProdutoItems, ItemInfoEconomia, BannerArea, ComprarSaibaMais, Botao, ImagemBanner} from './AppStyled';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import iMac from './assets/images/iMac.svg';
import macbookAir from './assets/images/macbookAir.svg';
import macAcessories from './assets/images/macAcessories.svg';
import macbookPro from './assets/images/macbookPro.svg';
import macCompare from './assets/images/macCompare.svg';
import macDisplays from './assets/images/macDisplays.svg';
import macMini from './assets/images/macMini.svg';
import macOs from './assets/images/macOs.svg';
import macPro from './assets/images/macPro.svg';
import macShop from './assets/images/macShop.svg';
import macStudio from './assets/images/macStudio.svg';
import macair from './assets/images/macbook.jpeg';


function App() {

  const [novoProduto, setNovoProduto] = useState(false);


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
      <NavItems>
        
        <ItemsApple>
          <ImageAppleItems src={macbookAir} widthImage={'90px'} alt="" />
          <TextItems>MacBook Air</TextItems>
          <NovoProdutoItems>Novo</NovoProdutoItems>

        </ItemsApple>
        
        <ItemsApple>
          <ImageAppleItems src={macbookPro} widthImage={'90px'} alt="" />
          <TextItems>MacBook Pro</TextItems>
          <NovoProdutoItems>Novo</NovoProdutoItems>

        </ItemsApple>

        <ItemsApple>
          <ImageAppleItems src={iMac} widthImage={'45px'} alt="" />
          <TextItems>iMac de 24 pol.</TextItems>
          <NovoProdutoItems style={{color: 'white'}}>Novo</NovoProdutoItems>
        </ItemsApple>

        <ItemsApple>
          <ImageAppleItems src={macMini} widthImage={'30px'} alt="" />
          <TextItems>Mac mini</TextItems>
          <NovoProdutoItems style={{color: 'white'}}>Novo</NovoProdutoItems>

        </ItemsApple>

        <ItemsApple>
          <ImageAppleItems  src={macStudio} widthImage={'30px'} alt="" />
          <TextItems>Mac Studio</TextItems>
          <NovoProdutoItems style={{color: 'white'}}>Novo</NovoProdutoItems>

        </ItemsApple>

        <ItemsApple>
          <ImageAppleItems style={{marginTop: '13px'}} src={macCompare} widthImage={'37px'} alt="" />
          <TextItems>Comparar </TextItems>
          <NovoProdutoItems style={{color: 'white'}}>Novo</NovoProdutoItems>

        </ItemsApple>

        <ItemsApple>
          <ImageAppleItems style={{marginTop: '20px'}} src={macDisplays} widthImage={'50px'} alt="" />
          <TextItems>Monitores</TextItems>
          <NovoProdutoItems style={{color: 'white'}}>Novo</NovoProdutoItems>

        </ItemsApple>

        <ItemsApple>
          <ImageAppleItems style={{marginTop: '-5px'}} src={macAcessories} widthImage={'40px'} alt="" />
          <TextItems>Acessórios</TextItems>
          <NovoProdutoItems style={{color: 'white'}}>Novo</NovoProdutoItems>

        </ItemsApple>

        <ItemsApple>
          <ImageAppleItems style={{marginTop: '-7px'}} src={macOs} widthImage={'45px'} alt="" />
          <TextItems>Monterey</TextItems>
          <NovoProdutoItems style={{color: 'white'}}>Novo</NovoProdutoItems>

        </ItemsApple>

        <ItemsApple>
          <ImageAppleItems style={{marginTop: '16px'}} src={macShop} widthImage={'85px'} alt="" />
          <TextItems>Comprar Mac</TextItems>
          <NovoProdutoItems style={{color: 'white'}}>Novo</NovoProdutoItems>

        </ItemsApple>
      </NavItems>
      <ItemInfoEconomia>
        <TextItems style={{color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>
          <p>Economize na compra do MacBook Air e do MacBook Pro de 13 polegadas na Apple Store Educacional*. <a href="https://apple.com.br"> Comprar  &gt; </a></p>
        </TextItems>
      </ItemInfoEconomia>
      <BannerArea>
      <NovoProdutoItems style={{fontSize: '16px'}}>Novo</NovoProdutoItems>
      <h1>MacBook Air</h1>
      <h2>Livre, leve e voa.</h2>
      <p className='parte--preco'>A partir de R$ 13.999</p>
      <ComprarSaibaMais>
        <Botao>Comprar</Botao>
        <p className='saiba--mais'><a href="https://apple.com.br">Saiba mais &gt; </a></p>
      </ComprarSaibaMais>
      <ImageAppleItems src={macair} widthImage='450px' marginTop='30px' />
      </BannerArea>

      <BannerArea bannerBackground='#1d1d1f'>
      <NovoProdutoItems style={{fontSize: '16px'}}>Novo</NovoProdutoItems>
      <h1>MacBook Air</h1>
      <h2>Livre, leve e voa.</h2>
      <p className='parte--preco'>A partir de R$ 13.999</p>
      <ComprarSaibaMais>
        <Botao>Comprar</Botao>
        <p className='saiba--mais'><a href="https://apple.com.br">Saiba mais &gt; </a></p>
      </ComprarSaibaMais>
      <ImageAppleItems src={macair} widthImage='450px' marginTop='30px' />
      </BannerArea >

      
    </>
  );
}

export default App;
