import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import DefaultModule from '@/store/default.module';

Vue.use(Vuex);

const options: StoreOptions<{}> = {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        DefaultModule,
    },
};

export default new Vuex.Store(options);
