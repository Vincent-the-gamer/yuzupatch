<template>
    <Header />
      <div>
        <div w-60vw bg-rgba-255-255-255-0.9 dark:bg-rgba-0-0-0-0.7 m="0 auto t-10" h-fit p-5>
          <h1 font-size-10>选择你的版本</h1>
          <button btn mt-10 w-60 h-15 mr-3 @click="router.push('/game/pc-game')">PC版</button>
          <button btn mt-10 w-60 h-15 @click="router.push('/game/android-game')">安卓版</button>
          <img src="/kanna.jpg" alt="kanna" mt-4 m-inline-auto h-80/>
        </div>
      </div>
    <Footer />
</template>

<script setup lang="ts">
const router = useRouter()
</script>