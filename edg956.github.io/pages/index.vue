<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="">
        <p class="title">Hi</p>
	<p class="subtitle">I'm a software engineer based in Spain.</p>
	<p>I like crossfit, arepas and python.</p>
	<p>
	  You can find me on the internet on  
	  <a v-for="site in sites" :href="site.link">
	    <b-icon :icon="site.icon" type="is-dark"/>
	  </a>.
	</p>
	<p>
	  You can contact me through my personal <a href="mailto:inquiries@donaque.xyz">email</a>.
	</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'IndexPage',
  components: {
  },
  data () {
    return {
      sites: [
      	{name: 'Github', icon: 'github', link: 'https://github.com/edg956'},
      	{name: 'StackOverflow', icon: 'stack-overflow', link: 'https://stackoverflow.com/users/8868327/edg956'},
      	{name: 'Linkedin', icon: 'linkedin', link: 'https://www.linkedin.com/in/eugenio-donaque'},
      ]
    }
  }

}
</script>
