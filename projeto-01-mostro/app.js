new Vue({
    el: "#app",
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []


    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        //Atacar o adversário
        attack(especial) {
            //console.log(especial, this.getRandom(5, 10))
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }


        },
        //Ao ser curado, será atacado.
        healAnHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')

        },
        //Curar o Jogador
        heal(min, max) {
            const heal = this.getRandom(min, max)
            // Math.min → Passa a pegar o valor minimo, para não ultrapassar 100
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')

        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            //Math.max vai evitar do valor ficar negativo
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)

        },
        //Registrar log
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }

    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }

    }
})