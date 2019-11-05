<template>
    <nav class="navbar-main">
        <a class="navbar-name" href="#">Core+Vue</a>
        <button
            class="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggle-icon"></span>
        </button>
        <div class="navbar-links-container" id="navbarNavAltMarkup">
            <div class="navbar-links">
                <router-link
                    to="/home"
                    class="router-link"
                    active-class="active"
                    >Home</router-link
                >
                <router-link
                    to="/about"
                    class="router-link"
                    active-class="active"
                    >About</router-link
                >
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue { }
</script>

<style lang="scss" scoped>
</style>