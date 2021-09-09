import {ref,reactive,onMounted,onBeforeUnmount} from 'vue';
export default function () {
    let isOpen=ref(false)
    let openDialog=()=>{
        isOpen.value=true
    }
    let DialogClose=()=>{
        isOpen.value=false
    }
    return{
        isOpen,
        openDialog,
        DialogClose

    }
}
