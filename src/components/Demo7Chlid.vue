<template>
    <div style="background-color:skyblue;padding: 10px">
        <h1>Demo7Chlid组件</h1>
    </div>
    <button @click="openDialog">打开Dialog</button>
    <Dialog :Disopen="isOpen" @close="DialogClose">
        <template v-slot:dialogSlot>
             <div>Solt内容</div>
        </template>
    </Dialog>
</template>

<script>
    import {ref} from 'vue'
    import dialog from "../hooks/dialog";
    import Dialog from "./Dialog";
    export default {
        name: "Demo7Chlid",
        components:{Dialog},
        setup(props,context){
           /* let isOpen=ref(false)*/
           let {isOpen,openDialog,DialogClose}=dialog()
            return{
                openDialog,
                isOpen,
                DialogClose
            }
        }
    }
</script>

<style scoped>

</style>