<template>
  <div class="hello">
    <input v-model="child" @input="$emit('update:message',child)" type="text" />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      child:''
    };
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
