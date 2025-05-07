<template>
  <Header />
  <Back />
  <div w-60vw bg-rgba-255-255-255-0.9 dark:bg-rgba-0-0-0-0.7 m="0 auto t-10" h-fit p-5>
    <h1 font-size-50px p-2>安卓版游戏</h1>
    <!-- <div class="card">
      <h1 class="title">⚠️ 注意</h1>
      <p>krkr2模拟器默认会有底部白边挡住菜单，请参考
        <a href="https://blog.vince-g.xyz/posts/krkr2-tip" target="_blank">我的博客</a>
        来解决该问题。
      </p>
    </div> -->
    <WarningCard title="⚠️ 注意">
      krkr2模拟器默认会有底部白边挡住菜单，请参考
      <a href="https://blog.vince-g.xyz/posts/krkr2-tip" target="_blank">我的博客</a>
      来解决该问题。
    </WarningCard>
    <a href="https://pan.baidu.com/s/1r6t8ablXyPe0QgOeq-FjDg?pwd=0721" target="_blank">
      模拟器及解压工具下载(提取码： 0721)
    </a>
    <div border="2px solid black dark:white rd-6px" hover="scale-110%" p-4 mt-7 mb-6 relative w-fit m="0 auto"
      transition-all-200 v-for="game of games">
      <img :src="game.imgLink" relative w-600px />
      <h1 font-size-30px>{{ game.title }}</h1>
      <p>下载地址：</p>
      <div flex="~ row justify-center items-center">
        <button btn m-inline-5px v-if="game.baiduLink" @click="() => linkHref(game.baiduLink)">百度网盘下载(提取码: {{
          game.baiduCode }})</button>
        <button btn m-inline-5px v-if="game.googleDriveLink" @click="() => linkHref(game.googleDriveLink)">Google
          Drive下载</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const games = reactive<GameCard[]>([
  {
    imgLink: "/covers/riddle-joker.png",
    title: "Riddle Joker(Krkr2模拟器)",
    baiduLink: "https://pan.baidu.com/s/1D6fqL0DIDzHqtFsjbujdDg?pwd=0721",
    baiduCode: "0721"
  },
])

function linkHref(url: string) {
  window.open(url)
}
</script>

<style scoped>

</style>