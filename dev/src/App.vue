<script setup>
import MenuButton from './components/MenuButton.vue';
import HorDiv from './components/HorDiv.vue';
import { routerKey, RouterLink, RouterView } from 'vue-router'
//do imports of components etc

</script>

<template>
<div class="fullback">

  <div class="middlesection">
      <div class="topbar">
        <h1 style="font-size:3.5vw" class = "resizetext"> [ WELCOME TO THE SAS ZONE ] </h1>
      </div>
      <HorDiv/>
      <div class="topbar">
        <MenuButton title="HOME | INFO" :isrouter="true" route="/" />
        <MenuButton title="SHOWREEL" :isrouter="true" route="/Sas_van_Gulik/reel"/>
        <MenuButton title="SKILLS" :isrouter="true" route="/Sas_van_Gulik/skills" />
        <MenuButton title="WHERE TO FIND ME" :isrouter="true" route="/Sas_van_Gulik/external" />
      </div>
      <HorDiv/>

      <RouterView></RouterView>
  </div>

</div>
</template>

<style scoped>
.fullback
{
    display:flex;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 150vh;
    background-color:rgb(216, 216, 216);
}

.middlesection
{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position:absolute;
    top:0;
    left:20%;
    width:60%;
    height: 100%;
    display: flex;
    align-items: top;
    background-color: rgb(248, 248, 248);
}

.topbar
{
    display: flex;
    align-items: stretch;
    align-content: stretch;
    justify-content: space-evenly;
    width:100%;
    height:fit-content;
    flex-direction:row;
    background-color: rgb(248, 248, 248);

}

.resizetext
{
    margin-top: 1%;
    margin-bottom: 1%;
}

@media (max-width: 1024px) {
    .middlesection
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position:absolute;
        top:0;
        left:0%;
        width:100%;
        height: 100%;
        display: flex;
        align-items: top;
        background-color: rgb(248, 248, 248);
    }
}

</style>