<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<div><button v-quandov1="acaov1">Executar</button></div>
		<div><button v-quandov2:click="acaov2">Executar</button></div>
		<p 
			v-quandov3:mouseenter="mouseEnter"
			v-quandov3:mouseleave="mouseLeave">Teste mouse event!</p>
	</div>
</template>

<script>
export default {
	directives:{
		quandov1:{
			bind(el, binding){
				el.onclick = function(e) {
					binding.value()
				}
			}
		},
		quandov2:{
			bind(el, binding){
				const tipo = binding.arg
				const fn = binding.value
				el.addEventListener(tipo, fn)
			}
		},
		quandov3:{
			bind(el, binding){
				const tipo = binding.arg
				const fn = binding.value
				el.addEventListener(tipo, fn)
			}
		}

	},
	methods: {
		acaov1(){
			alert('Ação executada V1!')
		},
		acaov2(){
			alert('Ação executada V2!')
		},
		mouseEnter(){
			console.log('Mouse enter!')
			
		},
		mouseLeave(){
			console.log('Mouse leave!')
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
