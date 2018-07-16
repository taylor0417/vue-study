<template>
    <div>
        <div>VUE中的过度效果</div>
        <div>---------------------------</div>

        <button @click="show = !show">Toggle</button>
        <transition name="fades">
            <p v-if="show">Hello</p>
        </transition>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              show: true  
            }
        }
    }
</script>

<style>
    .fades-enter-active,.fades-leave-active {
        transition: opacity 1s;
    }
    .fades-enter,.fades-leave-to {
        opacity: 0;
    }
</style>