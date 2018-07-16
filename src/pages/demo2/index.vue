<template>
    <div>
        <div>选项数据</div>
        <div>-------------------------------</div>
        <div>{{msg}}</div>
        <div>-------------------------------</div>
        <div>computed: {{aDouble}}</div>
        <div>-------------------------------</div>
        <div @click="say('哈哈')">点击我</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg: 'Hello World',
                num: 3
            }
        },

        computed: {
            aDouble(){
                return this.num*2;
            }
        },

        methods: {
            say(content){
                alert(content)
            }
        }
    }
</script>