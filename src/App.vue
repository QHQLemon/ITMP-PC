<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    let self = this;
    axios
      .get("/getRight")
      .then(function(response) {
        console.log(response.data.data);
        self.$store.commit("initUserRouter", response.data.data);
        console.log("store", self.$store.state.userRouter);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
}
</style>
