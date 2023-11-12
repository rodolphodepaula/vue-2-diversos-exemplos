
new Vue({
        el: '#desafio',
        data: {
           nome: 'Rodolpho de Paula',
           idade: 37,
           imagem: ''
          
        },
        methods:{
            idadeVezes3(){
                return this.idade * 3
            },
            
            random(){
                return Math.random()
            }

          
            
        }
    })