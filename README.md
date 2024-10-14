# Apple Web Page Clone
## @author: Paulo Santos
Este projeto é uma réplica da página principal da Apple, desenvolvida com **React** e utilizando **Styled Components** para estilização, o **useState** para o gerenciamento de estado local e algumas **funções avançadas do React** para manipulação de dados e componentes.

## Índice
- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
  - [Exemplos de Código](#exemplos-de-código)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

O projeto tem como objetivo replicar a página inicial da Apple, com um foco especial em aplicar boas práticas de **React** e **JavaScript moderno**, além de uma estilização consistente utilizando **Styled Components**. Esse clone foi feito com o propósito de estudo e desenvolvimento contínuo das habilidades de front-end, com ênfase em componentes reutilizáveis e gerenciamento de estado.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces.
- **Styled Components**: Biblioteca para estilização de componentes no React utilizando JavaScript.
- **useState**: Hook do React para gerenciar o estado dos componentes.
- **JavaScript ES6+**: Utilização de funções avançadas, como `map`, `filter`, `reduce` e sintaxe moderna.

## Funcionalidades

- **Estilização Modular**: Utilização de **Styled Components** para criar estilos encapsulados e reutilizáveis.
- **Gerenciamento de Estado**: O estado da aplicação é gerenciado com o **useState** para interações de UI, como o controle de menus, animações e transições.
- **Funções Avançadas**: Utilização de funções JavaScript modernas para a renderização dinâmica de componentes e manipulação de dados.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/apple-clone.git

2. Navegue até o diretório do projeto:
   ```bash
   cd apple-clone

3. Instale as dependências:
    npm install

4. Inicie o servidor de desenvolvimento:
    npm start
    
    O projeto será iniciado em http://localhost:3000.

## Uso

A aplicação foi desenvolvida para ser responsiva e imitar o layout original da Apple. Componentes como o menu de navegação, seções de produtos e rodapé foram criados utilizando Styled Components e manipulados com useState para controlar interações dinâmicas.

## Exemplos de Código
### Uso de Styled Components
```bash
import styled from 'styled-components';

interface BannerBackgroundType {
    bannerBackground?: string;
}

export const BannerArea = styled.div<BannerBackgroundType>`

    border: solid 0px green;
    height: 580px;
    display: flex;
    flex-direction: column;
    padding: 60px 0px;
    align-items: center;
    margin-top: 0px;
    background-color: ${(props)=> props.bannerBackground? props.bannerBackground : 'white'};

    h1 {
        font-size: 56px;
        font-family: 'MyriadProBold';
        color: #1d1d1f;
        margin-top: -0.0001px;
    }

    h2 {
        font-size: 20px;
        font-family: 'MyriadProRegular';
        color: #1d1d1f;
        margin-top: -30px;

    }
    .parte--preco {
        font-size: 15px;
        font-family: 'MyriadProLight';
        color: #1d1d1f;
        margin-top: -5px;
    };

`;

<BannerArea bannerBackground="#040303"></BannerArea >
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.

## Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

## Autor
Desenvolvido por Paulo Santos.
