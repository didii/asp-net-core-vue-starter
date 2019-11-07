<template>
    <div id="app">
        <navbar />
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Bottom from '@/components/Bottom.vue';

@Component({
    components: {
        Navbar,
        HelloWorld,
    },
})
export default class App extends Vue { }
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>