import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html,
  body {height: 100%;}

  body {margin: 0;
    color: #292a2c;
    font-size: 15px;
    -webkit-text-size-adjust: 100%;
    font-family: 'Helvetica Neue', sans-serif;
  }

  h1 {font-size: 70px; margin: 0;}

  .tag {}
  .sub {font-size: 18px;}

  p {margin: 0 0 10px;}


  .interface {
    position: relative; z-index: 1;
    display: grid;
    grid-template-columns: 1fr 400px;
  }
  .interface .inhoud {padding: 100px; color: #fff;}
  .interface .inhoud .header {margin-bottom: 40px;}

  .interface .inhoud .episodes {display: flex; flex-wrap: wrap;}

  .interface .itemDetail {position: relative; background: #fff;}
  .interface .itemDetail .sluiten {position: absolute; top: 0; right: 0; padding: 20px; font-size: 40px; color: #fff;}
  .interface .itemDetail .afbeelding {line-height: 0;}
  .interface .itemDetail .content {padding: 40px; border-top: 1px solid #eaeaea;}
  .interface .itemDetail .content.info {display: flex;}
  .interface .itemDetail .content.info .rating {margin-left: auto;}
  .interface .itemDetail .content.info .rating svg {fill: #EFD358;}

  .bg {position: fixed; background: #000; top: 0; left: 0; right: 0; bottom: 0;}
  .bg img {width: 100%; height: 100%; object-fit: cover; object-position: top; opacity: .4;}

`;
 
export default GlobalStyle;