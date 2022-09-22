<template>
    <div class="nav">
        <nav>
            NAV
        </nav>
    </div>
    <div class="body">
        <RouterView/>
    </div>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router';

</script>

<style scoped>
.nav {
    background-color: var(--color-background-soft);
    border-color: var(--color-border);
    height: auto;
    margin: 10px;
}

.body {
    background-color: aqua;
    height: auto;
    flex-grow: 4;
    margin: 10px;
}
</style>
