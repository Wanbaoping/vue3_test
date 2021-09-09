<template>
    <h1>计算</h1>
    姓: <input type="text" v-model="person.fristName"><br>
    名: <input type="text" v-model="person.lastName">
    {{person.fullName}}<br>
    全名: <input type="text" v-model="person.fullName">
</template>

<script>
    import {computed,reactive} from "vue";
    export default {
        name: "Demo2",
        setup(){
            let person = reactive({
                fullName:'',
                fristName:'张',
                lastName:'三',
                age:18,
                job:{
                    type:'前端工程师3',
                    salary:'3K',
                },
                hobby:['打球','跑步']
            })
            //只能读
           /* person.fullName=computed(()=>{
                return person.fristName+person.lastName
            })*/
            //读写
            person.fullName=computed({
                get(){
                    return person.fristName+person.lastName
                },
                set(value){
                    person.fristName=value.substring(0,1)
                    person.lastName=value.substring(1)
                }
            })

            return {person}
        }
    }
</script>

<style scoped>

</style>