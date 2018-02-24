<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from "@/components/footer"
export default {
  name: 'App',
  components: {
  	'v-footer': footer
  }
}
</script>

<style>
	html,body,#app{
		height: 100%;
	}
	#app{
		background: #4A4A5A;;
		max-width: 640px;
		margin: 0 auto;
	}
</style>
