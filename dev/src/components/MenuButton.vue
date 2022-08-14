
<script>
import router from '../router';

export default {
  props: {
    title: String,
    hover: Boolean,
    hstate: {Boolean, default : false},
    isurl: {Boolean, default : false},
    isrouter: {Boolean, default : false},
    url: {type: String, default: "https://google.com"},
    route: {type: String, default: "/"}
  },
  methods:
  {
    clickAction()
    {
      if(this.isurl === true){
        window.open(this.url, '_blank').focus();
      }
      if(this.isrouter === true){
        router.push(this.route);
      }
    }
  },

};

</script>



<template>
<div @click="clickAction()" @mouseover.native="hover = true; hstate = true" @mouseleave.native="hover = false;" class = "box" v-bind:class="[{background : hover&&hstate},{background_leave : (!hover&&hstate)}]" >
    <h3  class="sizetext">{{ title }}</h3>
</div>
</template>

<style scoped>
@import "../assets/main.css";
.box
{
    cursor:pointer;
    display:flex;
    width:auto;
    height: auto;
    align-items: center;
    align-content: center;
    border-style:ridge;
    border-radius: 0.2rem;
    padding:0.5%;
    
}
.background
{
    animation-name: fadein_bg;
    background-color: var(--button-fade-on);
    animation-iteration-count: 1;
    animation-duration: 0.5s;
}
.background_leave
{
    animation-name: fadeout_bg;
    background-color: var(--button-fade-off);
    animation-iteration-count: 1;
    animation-duration: 0.5s;
}
.sizetext
{
    margin-top: 0;
    margin-bottom: 0;
}

@keyframes fadein_bg{
  0%{background-color: var(--button-fade-off);}
  100%{background-color: var(--button-fade-on);}
}
@keyframes fadeout_bg{
  0%{background-color: var(--button-fade-on);}
  100%{background-color: var(--button-fade-off);}
}
</style>
