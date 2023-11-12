export default {
    state: {
        produtos: [],        
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adiconarProduto(state, payload) {
            state.produtos.push(payload)
        },       
    },
    actions: {
        adiconarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adiconarProduto', payload)
            }, 1000)
        }
    }

}