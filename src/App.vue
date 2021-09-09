<template>
    <Demo></Demo>
    <hr>
    <Demo1 :a="msg" b="我是b" @hello="showHello">
        <!--<template v-slot:abc>
        </template>
        <template v-slot:qwe>
        </template>-->
        <template v-slot:abc>slot</template>
    </Demo1>
    <hr>
    <Demo2>
    </Demo2>
    <hr>
    <Demo3></Demo3>
    <hr>
    <Demo4></Demo4>
    <hr>
    <button @click="isShowDemo = !isShowDemo">切换隐藏/显示Demo5</button>
    <Demo5 v-if="isShowDemo"></Demo5>
    <hr>
    <Demo6></Demo6>
    <hr>
    <div style="background-color: sienna;padding: 10px;">
        <h1>App组件</h1>
        <Demo7>
        </Demo7>
    </div>

</template>

<script>
    import Demo from "./components/Demo";
    import {ref} from 'vue';
    import Demo1 from "./components/Demo1";
    import Demo2 from "./components/Demo2";
    import Demo3 from "./components/Demo3";
    import Demo4 from "./components/Demo4";
    import Demo5 from "./components/Demo5";
    import Demo6 from "./components/Demo6";
    import Demo7 from "./components/Demo7";

    export default {
        name: 'App',
        components: {Demo7, Demo6, Demo5, Demo4, Demo3, Demo2, Demo1, Demo},
        setup() {
            let msg = ref('123')

            function showHello(value) {
                alert(`你触发了demo的事件${value}`)
            }

            let isShowDemo = ref(false)
            return {
                msg,
                showHello,
                isShowDemo
            }
        }
    }
</script>

