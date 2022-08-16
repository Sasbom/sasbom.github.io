<script setup>
import HorDiv from "../components/HorDiv.vue";
</script>

<template>
  <div class = "tpbar">
  <div class = "centerdiv">
  <h2>Sas van Gulik</h2>
  <a>Tech art - VFX - Junior Technical Director </a>
  <a>- HKU 3D animation graduate 2021 - SideFx Educator in training -</a><br>
  <a>🇳🇱: hen / hun , zij / haar | 🇬🇧: they / them , she / her </a><br>
  <HorDiv/>
  <br>
  <a><b>CONTACT INFO</b></a><br>
  <a>T: +31 6 - 11 86 88 33</a>
  <a>A: I'm based in Utrecht, the Netherlands.</a><br>
  <a>Business inquiries: saskervg@live.nl</a>
  <a>HKU related inquiries: sas.vangulik@hku.nl</a><br>
  <a>Discord: Sasbom#3079</a><br>
  <HorDiv/><br>
  <a><b>I AM OPEN FOR WORK!</b></a><br>
  <a>Currently I work part-time at HKU, Utrecht University of Arts,</a>
  <a>as a media wide teacher, primarily supervising 3D animation.</a>
  <a>I am looking for a part-time job, focussed on VFX with Houdini,</a>
  <a>and/or Jr. Technical Director work.</a>
  <br>
  <HorDiv/><br>
  <img class="imgstyle" src="../images/loop.gif" style="width:300px;height:300px;">
  <a><br><i>- In Thought - </i></a><br>
  <a>Animated in TV paint.</a>
  </div>
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
  height: auto;
	max-width: 100%;
  display: block;
}
</style>