<script setup>
import HorDiv from "../components/HorDiv.vue";
import MenuButton from "../components/MenuButton.vue";
</script>

<script>
export default {
  data(){
    return{
      logolist:[
      {
        image: "houdini.png",
        text: "SideFx Houdini"
      },
      {
        image: "maya.png",
        text: "Autodesk Maya"
      },
      {
        image: "rs_logopng.png",
        text: "Maxon Redshift"
      },
      {
        image: "substance_png.png",
        text: "Substance Suite"
      },
      {
        image: "zbrush.png",
        text: "Pixelogic Zbrush"
      },
      {
        image: "deadline.jpg",
        text: "AWS Thinkbox Deadline"
      },
      {
        image: "fusion.png",
        text: "Davinci Fusion"
      },
      ],
    }
  },
  
  props: {
    short: {Boolean, default : true},
  }}

</script>

<template>
    
    <div class = "tpbar">
    <div class = "centerdiv">
      <h2>Software I use regularly:</h2>
    </div>
    </div>
    <div class = "tpbar">
        <template v-for="item in logolist">
          <div class = "under">
            <img v-bind:src="'/src/images/logos/'+item.image" width="80" height = "80">
            <a>{{ item.text }}</a>
          </div>
        </template>
    </div>
    <br>
  <HorDiv />
  <div class = "tpbar_left">
    <h3 class = "resizetext">VFX:</h3>
      <a>My goal in VFX is to make things that are seemingly impossible, possible.</a>
      <a>Whenever something needs to be done, there is always a way to achieve it.</a><br>
      <li>In a lot of projects, I set up and art directing simulations (Fluids/RBD/Pyro)</li>
      <li>I am able to provide artist friendly interfaces for the tools I make, and making them fit a pipeline.</li>
      <li>I take utmost care of automizing and streamlining the production pipeline.</li>
    <br>
    <h3 class = "resizetext">Technical Direction:</h3>
      <a>I'm fairly new at Technical Direction, but I apply everything I learn at HKU on a big scale.</a>
      <br>
      <li>I am able to design and set up IT architecture. At HKU, I'm deploying a renderfarm.</li>
      <li>Due to the nature of my work at HKU, I supervise and have a good insight in what is viable timewise.</li>
      <li>I'm able to develop tools that aid in peoples production process, no matter the platform.</li>

    <br>
    <h3 class = "resizetext">Other skills:</h3>
    <h3 class = "resizetext">PROGRAMMING: </h3>
      
      <a>I am a true believer in unlocking the full potential of software, with programming.</a>

      <h4 class = "resizetext">Scripting languages:</h4>
        <li>VEX (Houdini)</li>
        <li>FusionScript (Davinci's internal scripting language for expressions)</li>
        <li>MEL (little experience)</li>
        <li>Respective Python modules for Houdini (hou.py), Maya (pymel) and Blender (bpy)</li>
      
      <h4 class = "resizetext">Shading languages:</h4>
        <li>OSL</li>
        <li>GLSL</li>

      <h4 class = "resizetext">Programming languages (Application):</h4>
        <li>Python - notably using numpy etc for geometry processing</li>
        <li>C++ - Used at HKU for administrative tools. I compile with G++ using MSYS2 and mingw32.</li>
        <li>Light javascript in context of Vue Js. (that's what made this site possible.)</li>
      <br>
      <h3 class = "resizetext">CURRENTLY STUDYING:</h3>
      <li>C++ / Python</li>
      <li>Rust and OpenCl planned for the future</li>
      <li>The new stuff in Houdini 19.5</li>
      <li>Blender</li>
      <li>Ubuntu server management</li>
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