<template>
    <div>
        <div>Class与Style绑定</div>
        <div>----------------------------</div>
        <!-- 第一种绑定方式 -->
        <div v-bind:class="{'active':isActive, 'text-danger':hasError}">class1</div>
        <!-- 第二种绑定方式 -->
        <div :class="classObject">class2</div>
        <!-- 第三种绑定方式 -->
        <div :class="[activeClass, errorClass]">class3</div>
        <div>---------------------------------</div>
        <div style="font-size:30px; color:red">style1</div>
        <div :style="styleObject">style2</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: true,
                hasError: true,
                classObject:{
                    'active':false,
                    'text-danger' :true
                },
                activeClass: 'active',
                errorClass: 'text-danger',
                styleObject: {
                    'font-size': '40px',
                    'color': 'blue'
                }
            }
        }
    }
</script>