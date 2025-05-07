<template>
    <div class="card">
        <h1 class="title">{{ title }}</h1>
        <p>
            <slot />
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<style scoped>
.card {
    width: 400px;
    height: fit-content;
    border-left: 3px solid orange;
    margin-inline: auto;
    margin-bottom: 1.5rem;

    p {
        position: relative;
        left: 1rem;
        width: fit-content;
        text-align: left;
    }

    & .title {
        color: orange;
        font-weight: bold;
        position: relative;
        width: fit-content;
        left: 1rem;
    }
}
</style>