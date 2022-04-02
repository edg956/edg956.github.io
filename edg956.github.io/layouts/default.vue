<template>
  <div>
    <b-navbar type="is-dark" class="pl-6 pr-6">
        <template #end>
	   <b-navbar-item tag="router-link" :to="{path: '/'}">Home</b-navbar-item>
	   <b-navbar-item tag="router-link" :to="{path: '/curriculum'}">Experience</b-navbar-item>
	</template>
    </b-navbar>
    <Nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
      	<a href="https://www.flaticon.com/free-icons/arepas" title="arepas icons">Arepas icons created by shmai - Flaticon</a>
	<p>Site created with <a href="https://buefy.org/">Buefy</a> and <a href="https://nuxtjs.org/">Nuxt.js</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
  }
}
</script>
