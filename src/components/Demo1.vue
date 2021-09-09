<template>
    <h1>一个人的信息 父子传值</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>a：{{a}}</h2>
    <h2>b：{{b}}</h2>
    <button @click="changeInfo">修改人的信息</button>
    <button @click="test">测试触发事件</button>
    <slot name="abc"></slot>
    <slot name="qwe">111</slot>
</template>

<script>
    import {reactive} from "vue";
    export default {
        name: "Demo1",
        props:['a','b'],
        emits:['hello'],
       /* beforeCreate() {
            console.log('beforeCreate',this)
        },*/
        setup(props,context){
            console.log("setup",this)
            console.log(props)
            console.log(context.attrs)
            console.log(context.emit)
            console.log(context.slots)

            let person = reactive({
                name:'张三',
                age:18,
                job:{
                    type:'前端工程师3',
                    salary:'3K',
                    a:{
                        b:{
                            c:9
                        }
                    }
                },
                hobby:['打球','跑步']
            })
            //方法
            function changeInfo(){
                person.name="李四"
                person.age=12
                person.job.type='houduan'
                person.job.salary='10k'
                person.job.a.b.c=12;
                person.hobby[0]='学习'
            }
            function test() {
                context.emit('hello',6666)
            }

            //返回一个对象（常用）
            return {
                person,
                changeInfo,
                test,
            }
        }
    }
</script>

<style scoped>

</style>