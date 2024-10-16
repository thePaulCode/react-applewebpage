import styled from 'styled-components';

interface ImageAppleItemsType {
    widthImage?: string;
    marginTop?: string;
}

interface BannerBackgroundType {
    bannerBackground?: string;
}

interface FontSizeType {
    fontSize? : string;
}


interface OptionMacType {
    selected: string;
}

interface FlexDirectionType {
    direction?: string;
    gapItem?: string;
}

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px;
    margin: 0px;
    padding: 0px;
    outline: 0;
    height: 48px;
    max-height: 44px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;   
    gap: 45px;
`;

export const ItemHeader = styled.div`
    border: solid px blue;
    z-index: 99997;
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
`;

export const TextHeader = styled.div`
    font-size: 12px;
    color: #f5f5f7;
    font-family: 'MyriadProLight';
    opacity: 0.8;
    letter-spacing: 0.1em;

`;

export const NavItems = styled.div`
    border: solid 0px red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    height: 110px;
    gap: 40px;
    max-height: 140px;
`;

export const ItemsApple = styled.div`
    border: solid 0px green;
    max-height: 140px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    gap: 0px;
    cursor: pointer;
`;

export const TextItems = styled.a<FontSizeType>`

    font-size: ${(props)=>props.fontSize? props.fontSize : '12px' };
    color: black;
    font-family: 'MyriadProRegular';
    opacity: 0.8;
    letter-spacing: 0.0em;  
    text-align: center;
    font-weight: 400;
    margin-top: 15px;

`;

export const ImageAppleItems = styled.img<ImageAppleItemsType>`
    width: ${(props)=> props.widthImage ? props.widthImage : '37px'};
    margin-top: ${(props) => props.marginTop ? props.marginTop : '0px'};
`;

export const NovoProdutoItems = styled.span`
    font-family: 'MyriadProRegular';
    color: #f56300;
    font-size: 10px;
    margin-top: 0px;
    position: relative;
`;

export const ItemInfoEconomia = styled.div`

    margin-top: 15px;
    height: 40px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    

    p  {      
        
        a {
            color: #06C;
            text-decoration: none;
        }

        a:hover {
        text-decoration: underline;
        }
    }

    
`;


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

export const ComprarSaibaMais = styled.div<FlexDirectionType>`
    display: flex;
    flex-direction: ${(props)=>props.direction? props.direction : 'row'};
    justify-content: center;
    align-items: center;
    border: solid 0px red;
    height: 50px;
    width: 200px;
    gap: ${(props)=>props.gapItem? props.gapItem : '25px'};
    
    .saiba--mais  {      
        font-family: 'MyriadProRegular';
        font-size: 14px;
        a {
            color: #06C;
            text-decoration: none;
        }

        a:hover {
        text-decoration: underline;
        }
    }
`;

export const Botao = styled.button`

    border: 0px;
    border-radius: 50px;
    height: 30px;
    width: 90px;
    background-color: #0071e3;
    color: white;
    font-family: 'MyriadProLight';
    cursor: pointer;
    font-weight: 400;
    font-size: 17px;

`;

export const ImagemBanner = styled.image`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 0px green;
    height: 400px;
    width: 450px;
    margin-top: 25px;
`;

export const SelectMac = styled.div`

    border: solid 0px red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 580px;

    h1 {
        font-size: 40px;
        font-family: 'MyriadProBold';
        color: #1d1d1f;
        margin-top: 5cqmax;
    }

`;

export const SelectItem = styled.div`

    margin-top: 30px;
    border-bottom: solid 2px #d2d2d2;
    height: 40px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: black;
    gap: 40px;

`;


export const OptionMac = styled.div<OptionMacType>`

    color: ${(props)=>props.selected? '' : ''};
    font-family: 'MyriadProRegular';
    font-size: 18px;
    width: 95px;
    height: 100%;
    border-bottom: solid 0px #1d1d1f;

`;

export const OptionsArea = styled.div`

    display: flex;
    flex-direction: row;
    height: 580px;
    width: 880px;
    align-items: center;
    justify-content: center;
    border: solid 0px blue;
    
`;

export const CardOption = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-bottom: solid 2px #d2d2d2;
    height: 350px;
    width: 100px;
    margin: 0px 20px 0 20px;
    flex: 1;
    padding-bottom: 5px;

`;