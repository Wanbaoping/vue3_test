<template>
    <h1>一个人的信息 响应式</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h3>ref ,工作种类：{{job.type}}</h3>
    <h3>ref,工作薪水：{{job.salary}}</h3>
    <h3>reactive 工作种类3：{{job3.type}}</h3>
    <h3>reactive 工作薪水3：{{job3.salary}}</h3>
    <h3>list：{{list}}</h3>
    <h3>list2：{{list2}}</h3>
    <h3>测试数据c：{{job3.a.b.c}}</h3>
    <button @click="changeInfo">修改人的信息</button>
    <button @click="changedata">修改data数据</button>
</template>

<script>
    import {ref,reactive} from 'vue'
    export default {
        name: 'Demo',
        data() {
            return {
                list:[1,2,3],
                /*优先使用setup*/
                name:'data里面的name'
            }
        },
        methods:{
            changedata(){
                this.list[0]=8
                console.log(this.list)
            }
        },
        setup(){
            //数据
            let name = ref('张三')
            let age = '18'
            let job = ref({
                type:'前端工程师',
                salary:'30K'
            })
            let list2=reactive([1,2])
            let job3 = reactive({
                type:'前端工程师3',
                salary:'3K',
                a:{
                    b:{
                        c:9
                    }
                }
            })

            //方法
            function changeInfo(){
                name.value = '李四'
                age = 48
                console.log(job)
                console.log(job.value)
                list2[0]=list2[0]+1
                job3.salary="1k"
                job3.a.b.c=2
            }

            //返回一个对象（常用）
            return {
                name,
                age,
                job,
                job3,
                list2,
                changeInfo
            }
        }
    }
</script>

