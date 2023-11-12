import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-673e0-default-rtdb.firebaseio.com/'
//DE FORMA GLOBAL
/* 
axios.defaults.headers.common['Autorization'] = 'abc123'
axios.defaults.headers.get['Accepts'] = 'application/json' */

 
Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseUrl: 'https://curso-vue-673e0-default-rtdb.firebaseio.com/',
            headers: {
               // get: {
                    'Autorization': 'abc123'
                //}
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            /* if(config.method === 'post'){
                config.method = 'put'
            } */
            return config 
        }, error => Promise.reject(error))
       
        Vue.prototype.$http.interceptors.response.use(res => {
            /* const array = [] */
            /* for(let chave in res.data) {
                array.push({id: chave, ...res.data[chave] })
                res.data = array
            } */
            return res
        }, erro => Promise.reject(erro))
    }

})