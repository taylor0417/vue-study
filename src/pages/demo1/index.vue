<template>
    <div>
        Hello
    </div>
</template>   
<script>
    export default{
        data(){
            return{

            }
        },

        beforeCreate(){
            console.log("beforeCreate")
        },

        created(){
            console.log("created")
        },

        beforeMount(){
            console.log("beforeMount")
        },
        
        mounted(){
            console.log("mounted")
        },
    }
</script> 