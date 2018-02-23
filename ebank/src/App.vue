<template>
  <div id="app" class="container">
    <div>
        <router-view/>
        <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import FooterView from './components/footer/footer';
export default {
  name: 'app',
  components:{
    "v-footer" : FooterView
  }
}
</script>

