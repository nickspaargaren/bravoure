import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #000;
    font-size: 15px;
    font-family: 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3 {margin: 0 0 5px;}
  h1 {font-size: 70px; margin: 0;}
  h2 {font-size: 25px;}
  h3 {font-size: 17px;}

  .sub {font-size: 18px;}

  p {margin: 0 0 10px; opacity: .8;}

  .interface {position: relative; z-index: 1;}
  .interface .inhoud {min-height: 100vh; padding: 100px; box-sizing: border-box; color: #fff; overflow: hidden; display: flex; flex-direction: column;}
  .interface .inhoud .header {margin: auto 0; padding: 0 400px 50px 0;}
  
  .interface .inhoud .episodes {margin-top: auto; user-select: none;}

  .interface .inhoud .episodes .row {box-sizing: border-box; width: calc(100% + 200px); white-space: nowrap; overflow: hidden; margin: 0 -100px; padding: 0 100px; display: flex;}
  .interface .inhoud .episodes .row .item {position: relative; width: 160px; margin-right: 20px; transition: .3s all ease;}
  .interface .inhoud .episodes .row .item:hover {opacity: .8; cursor: pointer;}
  .interface .inhoud .episodes .row .item .afbeelding {width: inherit;line-height: 0; margin-bottom: 10px;}
  .interface .inhoud .episodes .row .item .afbeelding img {width: inherit;}
  .interface .inhoud .episodes .row .item .id {position: absolute; left: 0; top: 0; background: #fff; line-height: 1; color: #000; font-weight: bold; padding: 10px 13px;}
  
  .interface .inhoud .episodes .navigatie {display: inline-grid; grid-gap: 10px; grid-template-columns: 1fr 1fr; line-height: 0; font-size: 30px;}
  .interface .inhoud .episodes .navigatie div:hover {opacity: .8; cursor: pointer;}

  .interface .itemDetail {position: absolute; background: #fff; width: 400px; top: 0; right: 0; min-height: 100vh;}
  .interface .itemDetail .sluiten {position: absolute; top: 20px; right: 20px; z-index: 1; padding: 5px; font-size: 40px; color: #fff; line-height: 0; background: rgba(0,0,0,.2); border-radius: 40px;}
  .interface .itemDetail .sluiten:hover {cursor: pointer;} 
  .interface .itemDetail .afbeelding {line-height: 0; height: 400px;}
  .interface .itemDetail .afbeelding div {width: 100%;}
  .interface .itemDetail .afbeelding div img {object-fit: cover;}
  .interface .itemDetail .content {padding: 40px; border-top: 1px solid #eaeaea;}
  .interface .itemDetail .content.info {display: flex;}
  .interface .itemDetail .content.info > div {margin: auto 0;}
  .interface .itemDetail .content.info .rating {display: flex; margin-left: auto;}
  .interface .itemDetail .content.info .rating > * {margin: auto 0;}
  .interface .itemDetail .content.info .rating svg {fill: #EFD358; font-size: 30px; margin-right: 6px;}

  .bg {position: fixed; background: #000; top: 0; left: 0; right: 0; bottom: 0; user-select: none;}
  .bg div {width: 100%;}
  .bg div img {width: 100%; height: 100%; object-fit: cover; object-position: top; opacity: .4;}

  @media (max-width: 1080px) {
    .interface .inhoud {padding: 20px;}
    .interface .inhoud .header {padding: 0;}
    .interface .itemDetail {
    width: auto;
    top: 20px;
    right: 20px;
    left: 20px;
    min-height: auto;
    }
  }


`;
 
export default GlobalStyle;