<template>
    <div ref="demo7" id="demo7" style="background-color: red;padding: 10px">
        <h1>Demo7组件</h1>
        <Demo7Chlid>
        </Demo7Chlid>
    </div>

</template>

<script>
    import Demo7Chlid from "./Demo7Chlid";
    export default {
        name: "Demo7",
        components: {Demo7Chlid}
    }
</script>

<style scoped>

</style>