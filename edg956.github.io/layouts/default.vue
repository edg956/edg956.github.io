<template>
  <div>
    <b-navbar :fixed-top="true" type="is-dark" class="pl-6-tablet pr-6-tablet">
      <template #start>
        <b-navbar-item class="is-hidden-mobile" tag="router-link" :to="{path: '/'}">
      	  <b-image class="profile-pic" src="https://github.com/edg956.png" alt="EU" ratio="1by1" rounded></b-image>
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
  width: 28px;
}
</style>
