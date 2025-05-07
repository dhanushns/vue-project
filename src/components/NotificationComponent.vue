<template>
    <div class="model-overlay">
        <div class="model-container">
            <h2>{{title}}</h2>
            <button @click="$emit('close')">Close</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"NotificationComponent",
        props:{
            title:String
        },
        emits : ["close"]
    }
</script>

<style scoped>

.model-overlay{
    display: grid;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0,0.3);
}

.model-container{

    min-width: 500px;
    min-height: 100px;
    background-color: white;
    border-radius: 10px;
    position: relative;
    padding: 10px 40px;

    button{
        padding: 5px 20px;
        border: none;
        border-radius: 5px;
        background-color: #dfdfdf;
    }
}

</style>