import styled from "styled-components";

 export const Button = styled.button `
 background-color:rgb(255, 248, 91);
 color: rgb(255, 1, 119);
 width: 3em;
 height: 3em;
 font-size: 1.5em;
 border-radius: 2em;
 border: none;
 cursor: pointer;
 box-shadow: 10px 5px 10px rgba(0,0,0, .5);
 margin: 0.3em;
 transition: opacity .3s;


 &:hover {
    opacity: .8;
 }

 &:active {
    opacity: .5;
 }

 &:nth-child(4n) {
    background-color: rgb(255, 1, 119);
    color: #fff;
 }
 &:nth-last-child(-n + 2) {
    visibility: hidden;
 }


 &:nth-child(-n + 3), &:last-child {
    background-color: #fff;
    color: #000;
    visibility: visible;
 }


`

export const Wrapper = styled.div `
background-color: rgb(248, 215, 234);
border-radius: 1em;
padding: 1em;
`

export const Box = styled.div`
margin-top:50px;
`

export const H1 = styled.h1 `
font-size: 40px;
`

export const H2 = styled.h2 `
font-size: 20px;
`

export const BoxForH1 = styled.div `
background-color: rgba(250,250,250, .9);
border-radius: 10px;
border: none;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 20px;
margin: 20px 0 30px;
flex-wrap: wrap;

`