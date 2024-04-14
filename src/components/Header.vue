<template>
    <header fixed top-0 left-0 w-full h-3rem bg-rgba-255-255-255-0.9 dark:bg-rgba-0-0-0-0.7 z-2>
        <div relative float-left top-5px left-10px>
            <img src="../assets/murasame.png" h-40px />
        </div>
        <div relative float-left top-5px left-20px>
            <h1 font-size-6>Yuzupatch</h1>
        </div>
        <div relative float-right top-0 right-10px p-2 hover="color-green" cursor-pointer transition-all-200>
            <a href="https://github.com/Vincent-the-gamer/yuzupatch" target="_blank">
                <div i-carbon-logo-github font-size-25px title="GitHub"/>
            </a>
        </div>
        <div relative float-right top-0 right-15px p-2 hover="color-green" cursor-pointer transition-all-200
        font-size-25px>
            <div i-carbon-sun v-if="isDark" title="Toggle Dark" @click="() => toggleDark()" />
            <div i-carbon-moon v-else title="Toggle Light" @click="() => toggleDark()"/>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>