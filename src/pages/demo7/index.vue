<template>
    <div>
        <div>列表渲染</div>
        <div>--------------------------</div>
        <ul id="example1">
            <li v-for="item in items">
                {{item.message}}
            </li>
        </ul>
        <div>-----------------------------</div>
        <ul id="example2">
            <li v-for="(item,index) in items">
                {{index}} - {{item.message}}
            </li>
        </ul>
        <div>-----------------------------</div>
        <ul id="example3">
            <li v-for="(value,key) in object">
                {{key}} - {{value}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items:[
                    {message:'你好'},
                    {message:'再见'}
                ],
                object:{
                    name:'宋科',
                    age: 20,
                    sex: '女'
                }
            }
        }
    }
</script>