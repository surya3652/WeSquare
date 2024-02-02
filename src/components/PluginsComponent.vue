<template>
  <div>
    <h3>Plugins for usage</h3>
    <ul>
      <li v-for="(x, index) in plugins" :key="index">
        <a :href="x.href" :target="x.target" :rel="x.rel">{{ x.content }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import getPlugins from "@/services/plugins";
export default {

  name: "PluginsComponent",
  data() {
    return {
      plugins: getPlugins(),
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
