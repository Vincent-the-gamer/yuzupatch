<script setup lang="ts">
  interface Card {
    imgLink: string,
    title: string,
    steamBaiduLink: string,
    steamGoogleDriveLink: string
  }

  const games = reactive<Card[]>([
    {
      imgLink: "/covers/senren-banka.jpg",
      title: "千恋 * 万花",
      steamBaiduLink: "https://pan.baidu.com/s/1EfCHvIaSMVPO_xTNX2ieHw?pwd=4yjn",
      steamGoogleDriveLink: "https://drive.google.com/file/d/1G4v7G0sgQ9Pz3aJsDqZVQ9cuJBSYokOE/view?usp=sharing"
    },
    {
      imgLink: "/covers/sabbat-of-the-witch.jpg",
      title: "魔女的夜宴",
      steamBaiduLink: "https://pan.baidu.com/s/1xY6jBe7gGImDeMLQYDy_Ow?pwd=0721",
      steamGoogleDriveLink: "https://drive.google.com/file/d/1POL4DBXDJnUp3fcN-1QqmgR0j_tCxisT/view?usp=sharing"
    },
    {
      imgLink: "/covers/riddle-joker.png",
      title: "Riddle Joker",
      steamBaiduLink: "https://pan.baidu.com/s/1mtf06z2HZBJ9i4ALnLlpPA?pwd=0721",
      steamGoogleDriveLink: "https://drive.google.com/file/d/1nyzYqC5aE9_C5cTGl_EYxgiEsHhlFHHR/view?usp=sharing"
    }
  ])

  function linkHref(url: string){
    window.open(url)
  }
</script>

<template>
  <Header/>
  <div w-60vw bg-rgba-255-255-255-0.9 dark:bg-rgba-0-0-0-0.7 m="0 auto t-10" h-fit p-5>
    <h1 font-size-50px p-2>Yuzupatch</h1>
    <h2 font-size-20px p-2 m-b-5>柚子社补丁集合</h2>
    <div border="2px solid black dark:white rd-6px" hover="scale-110%" p-4 m-b-6 relative w-fit m="0 auto" transition-all-200
         v-for="game of games">
      <img :src="game.imgLink" relative w-600px/>
      <h1 font-size-30px>{{ game.title }}</h1>
      <p>Steam补丁：</p>
      
      <div flex="~ row justify-center items-center">
        <button btn m-inline-5px @click="() => linkHref(game.steamBaiduLink)">百度网盘下载</button>
        <button btn m-inline-5px @click="() => linkHref(game.steamGoogleDriveLink)">Google Drive下载</button>
      </div>
    </div>
  </div>
  <Footer/>
</template>