import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modulos/carrinho'
import parametros from './modulos/parametros'

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        nome: 'Maria',
        sobrenome: 'Silva',
    },
    getters,
/*     state: {
        carrinho: {
            produtos:[]
        },
        parametros: {
            quantidade: 0,
            preco: 0

        }
    },
 */    modulos: {carrinho, parametros}
})