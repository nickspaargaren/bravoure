import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #000;
    font-size: 18px;
    font-family: 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3 {margin: 0 0 5px;}
  h1 {font-size: 74px; margin: 0;}
  h2 {font-size: 25px;}
  h3 {font-size: 17px; margin: 0 0 10px;}

  .sub {font-size: 23px; opacity: 1;}
  .sub + h1 {margin-top: -10px;}

  p {margin: 0 0 10px; font-size: 13px; opacity: .8;}

  .interface {position: relative; z-index: 1;}
  .interface .overview {min-height: 100vh; padding: 100px 100px 50px 100px; box-sizing: border-box; color: #fff; overflow: hidden; display: flex; flex-direction: column;}
  .interface .overview .inner {padding: 0 400px 0 0;}
  .interface .overview .inner.top {padding: 0 400px 50px 0; margin: auto 0; max-width: 500px;}
  .interface .overview .inner.bottom {padding: 25px 350px 0 0; display: flex; justify-content: flex-end;}

  .interface .overview .episodes {margin-top: auto; user-select: none;}

  .interface .overview .episodes .row {box-sizing: border-box; width: calc(100% + 200px); white-space: nowrap; overflow: hidden; margin: 0 -100px; padding: 0 100px; display: flex;}
  .interface .overview .episodes .row .item {position: relative; width: 250px; margin-right: 30px; transition: .3s all ease;}
  .interface .overview .episodes .row .item:hover {opacity: .8; cursor: pointer;}
  .interface .overview .episodes .row .item .image {width: inherit; line-height: 0; margin-bottom: 15px;}
  .interface .overview .episodes .row .item .image img {width: inherit;}
  .interface .overview .episodes .row .item .id {position: absolute; left: 0; top: 0; background: #fff; line-height: 1; color: #000; font-weight: bold; padding: 10px 13px;}
  
  .interface .overview .episodes .navigation {display: inline-grid; grid-gap: 10px; grid-template-columns: 1fr 1fr; line-height: 0; font-size: 30px;}
  .interface .overview .episodes .navigation div:hover {cursor: pointer;}
  .interface .overview .episodes .navigation div.disabled {opacity: .5; cursor: default;}

  .interface .itemDetail {position: absolute; z-index: 1; background: #fff; width: 400px; top: 0; right: 0; min-height: 100vh;}
  .interface .itemDetail .close {position: absolute; top: 20px; right: 20px; z-index: 1; padding: 5px; font-size: 40px; color: #fff; line-height: 0; background: rgba(0,0,0,.2); border-radius: 40px;}
  .interface .itemDetail .close:hover {cursor: pointer;} 
  .interface .itemDetail .image {line-height: 0;}
  .interface .itemDetail .image div {width: 100%;}
  .interface .itemDetail .image div img {object-fit: cover;}
  .interface .itemDetail .content {padding: 40px; border-top: 1px solid #eaeaea;}
  .interface .itemDetail .content.info {display: flex;}
  .interface .itemDetail .content.info .description, 
  .interface .itemDetail .content.info .rating {margin: auto 0;}
  .interface .itemDetail .content.info .rating {display: flex; margin-left: auto;}
  .interface .itemDetail .content.info .rating > * {margin: auto 0;}
  .interface .itemDetail .content.info .rating svg {fill: #EFD358; font-size: 30px; margin-right: 6px;}

  .interface .itemDetailBg {display: none; position: fixed; background:rgba(0,0,0,.4); top: 0; left: 0; right: 0; bottom: 0;}

  .bg {position: fixed; background: #000; top: 0; left: 0; right: 0; bottom: 0; user-select: none;}
  .bg div {width: 100%; height: 100%;}
  .bg div img {width: 100%; height: 100%; object-fit: cover; object-position: top; opacity: .4;}

  @media (max-width: 1080px) {
    .interface .overview {padding: 20px; min-height: auto;}
    .interface .overview .inner.top {max-width: none; margin: 0 0 20px; padding: 0;}
    .interface .overview .inner.bottom {display: none;}
    
    .interface .overview .episodes .row {width: calc(100% + 40px); margin: 0 -20px; padding: 0 20px; overflow-x: auto; -ms-scroll-snap-type: x mandatory; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; -ms-scroll-chaining: chained; scroll-padding: 20px;}
    .interface .overview .episodes .row .item {scroll-snap-align: start;}
    .interface .overview .episodes .row::-webkit-scrollbar {display: none;}

    .interface .itemDetail {width: auto; top: 20px; right: 20px; left: 20px; min-height: auto;}
    .interface .itemDetail .content {padding: 20px;}
    .interface .itemDetail .content.info .description {display: flex; flex-direction: column; line-height: 1.5em;}
    .interface .itemDetail .content.info .description .sep {display: none;}
    .interface .itemDetail .content.info .description .date {opacity: .65;}

    .interface .itemDetailBg {display: block;}
  }


`;
 
export default GlobalStyle;