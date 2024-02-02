<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue js" />
    <LinksComponent/>
    <EcoSystemComponent/>
    <PluginsComponent/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LinksComponent from "./components/LinksComponent.vue";
import PluginsComponent from "./components/PluginsComponent.vue";
import EcoSystemComponent from "./components/EcoSystemComponent.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    LinksComponent,
    PluginsComponent,
    EcoSystemComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(193, 240, 240);
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
