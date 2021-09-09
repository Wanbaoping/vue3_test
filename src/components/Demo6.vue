<template>
    <h1>toref</h1>
    <h4>{{person}}</h4>
    <h4>a{{a}}</h4>
    <h4>b{{b}}</h4>
    <h4>v{{c}}</h4>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <!--<h2>薪资：{{job.j1.salary}}K</h2>-->
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="c++">增长c</button>
 <!--   <button @click="job.j1.salary++">涨薪</button>-->
</template>

<script>
    import {ref,reactive,toRef,toRefs} from 'vue'
    export default {
        name: 'Demo6',
        setup(){
            let a={
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:20
                    }
                }
            }
            let  b=0
            let c=ref(b)
            //数据
            let person = reactive(a)

            // const name1 = person.name
            // console.log('%%%',name1)

            // const name2 = toRef(person,'name')
            // console.log('####',name2)

            const x = toRefs(person)
            console.log('******',x)

            //返回一个对象（常用）
            return {
                a,
                b,
                c,
                person,
                /*name:ref(person.name) 开辟新的对象*/
                name:toRef(person,'name'),//引用对象
                age:toRef(person,'age'),
                salary:toRef(person.job.j1,'salary')
                /*...toRefs(person)*/
            }
        }
    }
</script>

