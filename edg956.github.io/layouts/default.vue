<template>
  <div>
    <b-navbar type="is-dark" class="pl-6 pr-6">
      <template #start>
        <b-navbar-item tag="router-link" :to="{path: '/'}">
      	  <b-image src="https://github.com/edg956.png" alt="EU" rounded></b-image>
	</b-navbar-item>
      </template>
      <template #end>
	<b-navbar-item tag="router-link" :to="{path: '/'}">Home</b-navbar-item>
	<b-navbar-item tag="router-link" :to="{path: '/curriculum'}">Experience</b-navbar-item>
      </template>
    </b-navbar>
    <Nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
      	<a href="https://www.flaticon.com/free-icons/letter-d" title="letter d icons">Letter d icons created by Kian Bonanno - Flaticon</a>
	<p>Site created with <a href="https://buefy.org/">Buefy</a> and <a href="https://nuxtjs.org/">Nuxt.js</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style>
.profile-pic {
  border-radius: 50%;
  height: 5vh;
}
</style>
