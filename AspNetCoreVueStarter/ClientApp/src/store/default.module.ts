import Vue from 'vue';
import Vuex from 'vuex';
import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

Vue.use(Vuex);

@Module({name: 'default'})
export default class DefaultModule extends VuexModule {
    public counter: number = 0;

    @Mutation
    public increment(): void {
        this.counter++;
    }
}
