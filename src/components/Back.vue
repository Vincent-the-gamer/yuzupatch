<template>
    <button bg-cyan-50 dark:bg-gray-700
        @click="router.go(-1)">
        <- 返回上一页
    </button>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>
    button {
       position: fixed;
       top: 4rem;
       left: 1.5rem;
       border: 3px solid deeppink;
       border-radius: 8px;
       z-index: 5;
       padding: 5px;
       &:hover {
         background-color: yellow;
         color: black;
       }
    }
</style>