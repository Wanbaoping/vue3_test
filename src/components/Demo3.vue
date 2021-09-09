<template>
    <h1>监听</h1>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg+='！'">修改信息</button>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}K</h2>
    <h2>爱好：{{person.hobby}}</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
    <button @click="person.hobby[0]='乒乓球'">修改爱好</button>
</template>

<script>
    import {ref,reactive,watch,computed} from 'vue'
    export default {
        name: 'Demo3',
        setup(){
            //数据
            let sum = ref(0)
            let msg = ref('你好啊')
            let person = reactive({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:20
                    }
                },
                hobby:["篮球","羽毛球"]
            })
            let person2 = ref({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:20
                    }
                },
                hobby:["篮球","羽毛球"]
            })
            let copy=computed(()=>{
                return JSON.parse(JSON.stringify(person))
            })

            //情况一：监视ref所定义的一个响应式数据 是一个Refimpl对象 修改可以扑获到
            /*watch(sum, (newValue, oldValue) => {
                console.log('sum变了', newValue, oldValue)
            }, {immediate: true})*/

            //情况二：监视ref所定义的多个响应式数据
             watch([sum,msg],(newValue,oldValue)=>{
                console.log('sum或msg变了',newValue,oldValue)
            },{immediate:false})

            /*
                情况三：监视reactive所定义的一个响应式数据的全部属性
                        1.注意：此处无法正确的获取oldValue
                        2.注意：强制开启了深度监视（deep配置无效）
            */
            watch(person,(newValue,oldValue)=>{
                console.log('person变化了',newValue,oldValue)
            },{deep:false}) //此处的deep配置无效

             watch(copy,(newValue,oldValue)=>{
                console.log('copy变化了',newValue,oldValue)
            },{deep:false}) //此处的deep配置无效

            watch(person2,(newValue,oldValue)=>{
                console.log('copy变化了',newValue,oldValue)
            },{deep:true}) //或者person.value 监测的不是ref所定义的数据，而是求助于reactive所定义的数据

            //情况四：监视reactive所定义的一个响应式数据中的某个属性
             /*watch(()=>person.name,(newValue,oldValue)=>{
                console.log('person的name变化了',newValue,oldValue)
            })*/

            //情况五：监视reactive所定义的一个响应式数据中的某些属性
            /* watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
                console.log('person的name或age变化了',newValue,oldValue)
            })  */

            //特殊情况
            /* watch(()=>person.job,(newValue,oldValue)=>{
                console.log('person的job变化了',newValue,oldValue)
            },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效*/


            //返回一个对象（常用）
            return {
                sum,
                msg,
                person
            }
        }
    }
</script>

