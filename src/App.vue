<template>
  <div id="app">
    <m-header></m-header>
    <m-label></m-label>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from 'components/header/MHeader'
  import MLabel from 'components/label/MLabel'
  export default {
    name: 'App',
    components: {
      MHeader,
      MLabel
    }
  }
</script>

<style scoped lang="stylus">

</style>
