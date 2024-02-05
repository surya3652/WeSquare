<template>
  <div class="hello">
    <InputComponent v-on:modify="handleChange" />
    <h1>{{ message }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    InputComponent,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    handleChange(e) {
      const { message } = e.target.value;
      this.message = message;
      console.log(message);
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
