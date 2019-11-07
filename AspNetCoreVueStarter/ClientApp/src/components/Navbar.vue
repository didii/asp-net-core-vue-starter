<template>
    <div data-component="navbar">
        <router-link to="/home">Home</router-link>
        |
        <router-link to="/counter">Counter</router-link>
        |
        <router-link to="/about">About</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
    private drawer: boolean | null = null;
}
</script>

<style lang="scss" scoped>
</style>