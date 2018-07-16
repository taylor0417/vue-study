<template>
    <div>
        <div>{{reverseMsg}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'helloWorld'
            }
        },
        computed: {
            reverseMsg() {
                return this.msg.split('').reverse().join('');
            }
        }
    }
</script>