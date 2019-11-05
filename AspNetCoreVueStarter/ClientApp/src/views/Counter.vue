<template>
    <div data-component="counter">
        <h1>Counter</h1>
        <p>Clicking this button will increment the counter which is stored in the DefaultModule store.</p>
        <p>Count: {{this.defaultModule.counter}}</p>
        <v-btn @click="increment">Increment</v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import DefaultModule from '@/store/default.module';

@Component
export default class Counter extends Vue {
    private defaultModule = getModule(DefaultModule, this.$store);

    private increment(): void {
        this.defaultModule.increment();
    }
}
</script>