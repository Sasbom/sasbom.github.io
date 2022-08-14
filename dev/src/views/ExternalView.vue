<script setup>
import HorDiv from "../components/HorDiv.vue";
import MenuButton from "../components/MenuButton.vue";
</script>

<template>
  <h2 class = "tpbar_left">EXTERNAL LINKS:</h2>
  <div class = "tpbar_left">
    <h3 class = "resizetext">LinkedIn: </h3>
      <a href="https://www.linkedin.com/in/sas-van-gulik-0ba483244">My LinkedIn Page.</a>
    <br>
    <h3 class = "resizetext">Instagram: </h3>
      <a href="https://www.instagram.com/tsjongejongejonge/">My Instagram (More content coming soon... Someday!)</a>
    <br>
    <h3 class = "resizetext">Github (also the place this site is hosted. Thank you Github pages!): </h3>
      <a href="https://github.com/Sasbom">Look at me practise stuff sometimes. I'm aiming to post all my C++ projects here.</a>
    <br>
    <h3 class = "resizetext">Sometimes, when I'm not busy, I make music!</h3>
      <a href="https://debliepjes.bandcamp.com/">Bandcamp with weird music on it.</a>
    <br>
      
  </div>

</template>

<style scoped>
.tpbar
{
    display: flex;
    align-items: stretch;
    align-content: stretch;
    justify-content: space-evenly;
    width:100%;
    height: fit-content;
    flex-direction:row;
}
.tpbar_left
{
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: left;
    width:80%;
    left:10%;
    height: fit-content;
    flex-direction:column;
}
.centerdiv
{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: flex-start;
}
.resizetext
{
    margin-top: 1%;
    margin-bottom: 1%;
}

.imgstyle{
  width : 50px;
  height : 50px;
}

.under
{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:75%;
}
</style>