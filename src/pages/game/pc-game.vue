<template>
    <Header />
    <Back />
    <div w-60vw bg-rgba-255-255-255-0.9 dark:bg-rgba-0-0-0-0.7 m="0 auto t-10" h-fit p-5>
        <h1 font-size-50px p-2>PC版游戏</h1>
        <div border="2px solid black dark:white rd-6px" hover="scale-110%" p-4 m-b-6 relative w-fit m="0 auto"
            transition-all-200 v-for="game of games">
            <img :src="game.imgLink" relative w-600px />
            <h1 font-size-30px>{{ game.title }}</h1>
            <p>下载地址：</p>
            <div flex="~ row justify-center items-center">
                <button btn m-inline-5px v-if="game.baiduLink" @click="() => linkHref(game.baiduLink)">百度网盘下载</button>
                <button btn m-inline-5px v-if="game.googleDriveLink"
                    @click="() => linkHref(game.googleDriveLink)">Google Drive下载</button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup lang="ts">
const games = reactive<GameCard[]>([
  {
    imgLink: "/covers/tenshi-souzou.png",
    title: "天使☆纷扰 RE-BOOT!",
    googleDriveLink: "https://drive.google.com/file/d/16gpu0ZnbZa1-QmSOeTLw0MoTwGozuv_i/view?usp=sharing",
  },
])

function linkHref(url: string) {
  window.open(url)
}
</script>