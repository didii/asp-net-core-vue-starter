<template>
    <v-app id="inspire">
        <navbar />
        <v-content>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-content>
        <bottom />
    </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Bottom from '@/components/Bottom.vue';

@Component({
    components: {
        Navbar,
        HelloWorld,
        Bottom,
    },
})
export default class App extends Vue { }
</script>
