<template>
    <div>
        <div>自定义组件—倒计时</div>
        <countdown col="orange" @end="ending"></countdown>
    </div>
</template>

<script>
    import countdown from '@/components/countdown.vue' 
    export default{
        data() {
            return {

            }
        },
        methods: {
            ending(){
                alert('结束了')
            }
        },
        components:{
            countdown
        }
    }
</script>