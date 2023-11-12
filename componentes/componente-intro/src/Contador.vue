<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar()">+</button>
    <button @click="subtratir()">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    subtratir() {
      this.contador--;
    },
  },
};
</script>

<style scoped>
span {
  border-botton: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>