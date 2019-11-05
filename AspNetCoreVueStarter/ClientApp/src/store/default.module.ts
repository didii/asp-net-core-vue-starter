import Vue from 'vue';
import Vuex from 'vuex';
import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

Vue.use(Vuex);

@Module({name: 'default'})
export default class DefaultModule extends VuexModule {
    private _counter: number = 0;

    public get counter(): number {
        return this._counter;
    }

    @Mutation
    public increment(): void {
        this._counter++;
    }
}
