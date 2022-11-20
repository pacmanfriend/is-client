<template>
    <div class="nav">
        <RouterLink class="link-btn" to="/">Главная</RouterLink>
        <RouterLink class="link-btn" to="/lab1">LAB 1</RouterLink>
        <RouterLink class="link-btn" to="/lab2">LAB 2</RouterLink>
        <RouterLink class="link-btn" to="/lab3">LAB 3</RouterLink>
        <RouterLink class="link-btn" to="/lab4">LAB 4</RouterLink>
        <RouterLink class="link-btn" to="/lab5">LAB 5</RouterLink>
        <RouterLink class="link-btn" to="/lab6">LAB 6</RouterLink>
        <RouterLink class="link-btn" to="/lab7">LAB 7</RouterLink>
        <RouterLink class="link-btn" to="/lab8">LAB 8</RouterLink>
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
    display: flex;
    flex-direction: column;

    height: auto;
    flex-basis: 15%;

    background-color: var(--surface-card);
    border: 4px var(--surface-card) solid;
    border-radius: var(--border-radius);

    margin: 10px;
    padding: 4px;
}

.body {
    height: auto;
    flex-grow: 4;

    background-color: var(--surface-card);
    border: 4px var(--surface-card) solid;
    border-radius: var(--border-radius);

    margin: 10px;
    padding: 4px;
}

.link-btn {
    border: 1px var(--primary-color) solid;
    border-radius: var(--border-radius);
    background-color: var(--primary-color);
    color: var(--primary-color-text);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    padding: 5px 10px;
    margin: 10px;
    cursor: pointer;
}

.link-btn:hover {
    background-color: var(--color-hover);
    border-color: var(--color-hover);
}

</style>
