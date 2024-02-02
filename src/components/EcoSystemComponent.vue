<template>
  <div>
    <h3>Eco System</h3>
    <ul>
      <li v-for="(x, index) in links" :key="index">
        <a :href="x.href" :target="x.target" :rel="x.rel">{{ x.content }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import getEco from "@/services/ecosystem";
export default {
  name: "EcoSystemComponent",
  data() {
    return {
      links: getEco(),
    };
  },
};
</script>

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
