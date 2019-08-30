<template>
  <div id="app">
    <Sliders id="sliders"/>
    <router-view/>
  </div>
</template>

<script>
import Sliders from '@/components/Sliders'
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 40px;
}
#sliders {
  position:absolute;
  top: 700px;
}
</style>
