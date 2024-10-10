import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid 0px green;
    top: 0;    
    margin: 0;
    right: 0;
    left: 0;
    height: 48px;
    max-height: 44px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 9999;   
    gap: 45px;
`;

export const ItemHeader = styled.div`
    border: solid 0px blue;
    z-index: 99999;
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