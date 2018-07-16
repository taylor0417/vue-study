<template>
    <div>
        <div>Vue中DOM的操作</div>
        <div>----------------------------</div>
        <div ref="head" id="head"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            this.$refs.head.innerHTML = 'Christian'
        }
    }
</script>