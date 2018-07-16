<template>
    <div>
        <div>条件渲染</div>
        <div>------------------------------</div>
        <div v-if="ok">OK</div>
        <div v-if="type === 'a'">a</div>
        <div v-else-if="type === 'b'">b</div>
        <div v-else-if="type === 'c'">c</div>
        <div v-else>d</div>
        <div>----------------------------------</div>
        <div v-show="isShow">SHOW</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ok: true,
                type:'aa',
                isShow: true 
            }
        }
    }
</script>