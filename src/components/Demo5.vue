<template>
    <h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
    import {ref} from 'vue'
    import usePoint from '../hooks/usePoint'
    export default {
        name: 'Demo5',
        setup(){
            //数据
            let point = usePoint()
            return {point}
        }
    }
</script>

