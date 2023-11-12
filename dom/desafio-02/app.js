new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('estou alertando aqui!');
        },
        exibirValor(event) {
            this.valor = event.target.value
        }
    },
})