<template>
  <div class="hello">
    <input type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  data(){
    return{
      message : '',
    }
  },
  watch: {
    message(newValue) {
      this.$parent.message = newValue;
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
