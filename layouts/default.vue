<template>
  <div>

    <nuxt/>

  </div>
</template>

<style>

  /* Fonts */
  body {
    color: #000;
    font-size: 2rem;
  }

  h1, h2, h3, h4, h5, h6{
    text-transform: uppercase;
  }

  h2{
    font-size: 2rem;
    font-weight: bold;
  }

  @media screen and (max-width : 700px){
    body {
      font-size: 1.5rem;
    }

    h2{
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width : 400px){
    body {
      font-size: 1rem;
    }

    h2{
      font-size: 1rem;
    }
  }

  /* Links */
  a {
    color: #000;
  }

  a:hover {
    color: #000;
  }

  /* Navigation */
  nav a {
    color: #fff;
  }

  nav a:hover {
    color: #fff;
  }

  /* Spaces */
  .text-spacing > p, .text-spacing > ul{
    margin-bottom: 50px;
  }

  /* logo */
  .logo{
    height:50px;
  }

  /* hero image */
  .cover-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover ;
    position: relative;
  }

  .background-filter{
    background-color: rgba(0,0,0,.6);
    height:100%;
  }

  .full-hight-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100% ;
    position: relative;
  }

  /* hero text */
  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  .hero-text img{
    margin-bottom:15px;
  }

  .hero-text h1{
    font-size: 5rem;
    margin-bottom:25px;
  }

  .hero-text h2{
    font-weight: normal;
  }

  @media screen and (max-width : 650px){
    .hero-text h1{
      font-size: 3rem;
    }
    .hero-text h2{
      font-size: 1rem;
    }
  }

  @media screen and (max-width : 360px){
    .hero-text h1{
      font-size: 2rem;
    }
    .hero-text h2{
      font-size: 0.7rem;
    }
  }

  /* mockup */
  .mockup{
    position: relative;
    text-align: center;
  }

  .mockup--item{
    margin-top: -25vh;
    margin-bottom: -25vh;
  }

  .mockup--item img{
    max-height:50vh;
    max-width:100%;
  }

  /* full height */
  /*.full-height{
    height: 100vh;
    position: relative;
  }

  .full-height--img{
    height: 50vh;
  }

  .half-height{
    height: 50vh;
    position: relative;
  }*/

  /* highlight section */
  .highlight{
    color: #fff;
  }
  .highlight a {
    color: #fff;
  }

  .highlight a:hover {
    color: #fff;
  }

  .highlight-green{
      background-color: #27A844;
  }

  .highlight-blue{
      background-color: #007AFF;
  }

  .highlight-yellow{
      background-color: #FEC106;
  }

  .highlight-red{
      background-color: #E03347;
  }

  .highlight-gray{
    background-color: #111;
  }

  /* Seperators */

  .separator-wrapper{/* vh will include the scrollbar in some browsers :-( */
    overflow: hidden;
    width: 100%;
  }

  .separator-top-right {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 100px 100vw 0 0;
    position: relative;
    border-color: transparent white transparent transparent;
    z-index:999;
  }

  .separator-top-left {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 100px 0 0 100vw;
    position: relative;
    border-color: transparent transparent transparent white;
    z-index:999;
  }

  .separator-bottom-right {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 100vw 100px 0;
    position: relative;
    border-color: transparent white transparent transparent;
    z-index:999;
  }

  .separator-bottom-left {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 100px 100vw;
    position: relative;
    border-color: transparent transparent transparent white;
    z-index:999;
  }

  .seperator-up{
    margin-top: -100px;
    margin-bottom: 0;
  }

  .seperator-down{
    margin-top: 0;
    margin-bottom: -100px;
  }

  .seperator-compensate{
    padding-top:100px;
    padding-bottom:100px;
  }

  @media screen and (max-width : 500px){
    .separator-top-right {
      border-width: 50px 100vw 0 0;
    }

    .separator-top-left {
      border-width: 50px 0 0 100vw;
    }

    .separator-bottom-right {
      border-width: 0 100vw 50px 0;
    }

    .separator-bottom-left {
      border-width: 0 0 50px 100vw;
    }

    .seperator-up{
      margin-top: -50px;
    }

    .seperator-down{
      margin-bottom: -50px;
    }

    .seperator-compensate{
      padding-top:50px;
      padding-bottom:50px;
    }
  }

  .separator-top-right.separator-green{    border-color: transparent #27A844 transparent transparent; }
  .separator-top-right.separator-blue{     border-color: transparent #007AFF transparent transparent; }
  .separator-top-right.separator-yellow{    border-color: transparent #FEC106 transparent transparent; }
  .separator-top-right.separator-red{     border-color: transparent #E03347 transparent transparent; }
  .separator-top-left.separator-green{     border-color: transparent transparent transparent #27A844; }
  .separator-top-left.separator-blue{     border-color: transparent transparent transparent #007AFF; }
  .separator-top-left.separator-yellow{     border-color: transparent transparent transparent #FEC106 ; }
  .separator-top-left.separator-red{     border-color: transparent transparent transparent #E03347; }
  .separator-bottom-right.separator-green{    border-color: transparent #27A844 transparent transparent; }
  .separator-bottom-right.separator-blue{     border-color: transparent #007AFF transparent transparent; }
  .separator-bottom-right.separator-yellow{    border-color: transparent #FEC106 transparent transparent; }
  .separator-bottom-right.separator-red{     border-color: transparent #E03347 transparent transparent; }
  .separator-bottom-left.separator-green{     border-color: transparent transparent transparent #27A844; }
  .separator-bottom-left.separator-blue{     border-color: transparent transparent transparent #007AFF; }
  .separator-bottom-left.separator-yellow{     border-color: transparent transparent transparent #FEC106 ; }
  .separator-bottom-left.separator-red{     border-color: transparent transparent transparent #E03347; }

   /* Glass */
   .glass{
     background-color: #00000011;
     padding: 2em;
   }

  /* Techstack */
  .techstack--item{
    text-align: center;
    margin-bottom:25px;
  }

  .techstack--item img{
    max-height:100px;
  }

  .techstack--header{
    text-align: center;
    margin-bottom:100px;
  }

  @media screen and (max-width : 500px){
    .techstack--header{
      margin-bottom:50px;
    }
    .techstack--item img{
      max-height:50px;
    }
  }

  @media screen and (max-height : 400px){
    .techstack--header{
      margin-bottom:50px;
    }
    .techstack--item img{
      max-height:50px;
    }
  }



</style>
