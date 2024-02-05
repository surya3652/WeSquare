<template>
  <div class="hello">
    Child : <input type="text" v-model="message" v-on:keyup="trigger()" />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    trigger() {
      this.$parent.test(this.message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
