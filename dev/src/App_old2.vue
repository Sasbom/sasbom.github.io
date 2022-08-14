<script setup>
//do imports of components etc
</script>

<template>

    <div class = "thirds">
        <div class = "third">
            <div class="center">
            <a class = "bganim">Hi!!! ♡ welcome to my Autistic Tranny Site. </a>
            <a class = "bganim">Ill be talking about girldick here. Chuuu~</a>  
            <br>  
            <a class = "bganim">Some days are better than others</a>
            <a class = "bganim">Some people are too</a></div>
        </div>
        <div class = "twothirds"></div>
    </div>
    
</template>

<style scoped>
    div .thirds{
        display:flex;
        position:absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%
    }
    .third{
        width:33.333%;
        background-color: rgb(253, 228, 255);
    }
    .twothirds{
        width:66.666%;
        background-color: rgb(255, 246, 255);
    }

    .center{
        display:flex;
        align-content: center; 
        align-items: center;
        flex-direction: column;
        padding: 5%;
    }

    .bganim{
        color:rgb(255, 255, 255);
        background-color: azure;
        animation: colorchange 1s alternate;
        animation-iteration-count: infinite;
        padding: 1%;
        font-family:cursive;
    }

    @keyframes colorchange {
        0% {
            background-color:red;
        }
        100%
        {
            background-color:blue;
        }
    }

</style>