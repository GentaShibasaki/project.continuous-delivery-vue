<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld msg="Go rub Potato's belly for good luck!" />
    <div>
      <Map />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map";

export default {
  name: "app",
  components: {
    HelloWorld,
    Map,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
