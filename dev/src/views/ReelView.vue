<script setup>
import HorDiv from "../components/HorDiv.vue";
import MenuButton from "../components/MenuButton.vue";
</script>

<script>
export default {
  props: {
    short: {Boolean, default : true}
  }}

</script>

<template>
    
    <div class = "tpbar" v-if="short">
    <div class = "centerdiv">
    <h2>- [ SHOWREEL 2022 : SHORT VERSION ] -</h2>
    <HorDiv /><br>
    <iframe class="size_movie" src="https://player.vimeo.com/video/657786500?h=452969712a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sas van Gulik - TD/Houdini Reel"></iframe>
    </div>
    </div>

    <div class = "tpbar" v-if="!short">
    <div class = "centerdiv">
    <h2>- [ SHOWREEL END 2021 : LONG VERSION ] -</h2>
    <HorDiv /><br>
    <iframe class="size_movie" src="https://player.vimeo.com/video/634471170?h=0b5ad5609d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sas van Gulik - Houdini / Tech art progress reel 2021"></iframe>
    </div>
    </div>
    <br>
    <HorDiv />
    <br>
    <div class = "centerdiv tpbar">
    <h2 class="resizetext"><b>- [ REEL PICKER (patent pending) ] -</b></h2>
    </div>
    <br>
    <div class = tpbar>
        <MenuButton @click="short = true" title="[ SHORT REEL 2022 ]" />
        <MenuButton @click="short = false" title="[ LONG REEL END 2021 ]" />
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

.size_movie
{
  width : 60vw;
  height : 30vw;
}

</style>