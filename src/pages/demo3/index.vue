<template>
    <div>
        <div>模板语法</div>
        <div>-------------------------</div>
        <div>
            data: {{msg}}
        </div>
        <div>------------------------------------</div>
        <div>{{number + 1}}</div>
        <div>------------------------------------</div>
        <div v-html="rawHtml"></div>
        <div>------------------------------------</div>
        <div v-bind:class="color"></div>
        <div @click="change">修改颜色</div>
        <div>------------------------------------</div>
        <div v-on:click="say('下课吧')">点击我</div>
        <div>------------------------------------</div>
        <div> {{ message | capitalize }}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '我的天啊',
                number: 100,
                rawHtml: '<span>666</span>',
                color: 'red active',
                message: '随便'
            }
        },

        methods: {
            change() {
                this.color = 'blue'
            },
            say(content){
                alert(content)
            }
        },
        filters: {
            capitalize() {
                return '不能随便'
            }
        }
    }
</script>