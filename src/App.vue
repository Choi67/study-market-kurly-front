<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>

  * {
    margin: 0 ;
    padding: 0;
    box-sizing:border-box;
  }
  html, body {
    width:100%;
    height:100%;
  }
  #app {
    width:100%;
    max-width:600px;
    margin:0 auto;
  }
  .container {
    width:calc(100% - 40px);
    height:100%;
    margin:0 auto;
    background-color:transparent;
  }



  /* 공통 css */
  .display-flex {display:flex !important;}
  .justify-content-space-between {justify-content:space-between !important;}
  .justify-content-center {justify-content:center !important;}
  .align-items-center {align-items:center;}


  .mt5 {margin-top:5px !important;}
  .mt10 {margin-top:10px !important;}
  .mt20 {margin-top:20px !important; }
  .ml8 {margin-left:8px !important;}
  .pl8 {padding-left:8px !important}

  .common-input { width:100%; height:46px; padding: 0 11px 1px 15px; border: 1px solid rgb(221, 221, 221); border-radius:4px; font-size: 16px; color: rgb(51, 51, 51); font-weight: 400;  line-height: 1.5; outline: none; box-sizing: border-box ;}
  .common-btn {display:block;width:100%; height:46px; padding:0 10px; background-color:#fff; border:1px solid rgb(95, 0, 128); border-radius:4px; color:rgb(95, 0, 128); font-size:16px; font-weight:600; }
  .common-btn-disabled { border-color:rgb(221, 221, 221); color:rgb(221, 221, 221); }
  .common-btn-dark { display:block; width:100%; height:46px; padding:0 10px; background-color:rgb(95, 0, 128); border:0 none; border-radius:4px; color:#fff; font-size:16px; font-weight:600; }

  /* common 폰트 */
  .common-black {color: rgb(51, 51, 51);}
  .light-gray { color: rgb(153, 153, 153);}






</style>
