<template>
    <header fixed top-0 left-0 w-full h-3rem bg-rgba-255-255-255-0.9 dark:bg-rgba-0-0-0-0.7 z-2>
        <div relative float-left top-5px left-10px>
            <img src="/murasame.png" h-40px />
        </div>
        <div relative top-1.8 left-5 flex="~ row items-center gap-5">
            <h1 font-size-6>Yuzupatch</h1>
            <span hover="color-pink" @click="go('/')">补丁</span>
            <span hover="color-pink" @click="go('/game')">游戏</span>
        </div>
        <div absolute top-2.8 right-4 flex="~ row items-center gap-4" font-size-23px cursor-pointer transition-all-200>
            <div hover="color-green">
                <a href="https://github.com/Vincent-the-gamer/yuzupatch" target="_blank">
                    <div i-carbon-logo-github title="GitHub" />
                </a>
            </div>
            <div hover="color-green">
                <div i-carbon-sun v-if="!isDark" title="Toggle Dark" @click="() => toggleDark()" />
                <div i-carbon-moon v-else title="Toggle Light" @click="() => toggleDark()" />
            </div>
        </div>

    </header>
</template>

<script setup lang="ts">
const router = useRouter()

function go(route: string) {
    router.push(route)
}
</script>

<style lang="css" scoped>
span {
    cursor: pointer;
}
</style>