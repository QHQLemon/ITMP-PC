<template>
    <div class="m-header">
      <div class="container">
        <div class="row">
          <nav-left />
          <nav-right/>
        </div>
      </div>
    </div>
</template>

<script>

import NavLeft from './NavLeft'
import NavRight from './NavRight'
export default {
  components: {
    NavLeft,
    NavRight
  }
}
</script >

<style>
@import '../../assets/css/header/nav.css'
</style>
