<template>
  <a :href="href" v-on:click="sendEvent">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "TrackedAnchor",
  props: [
    "href"
  ],
  methods: {
    sendEvent(event) {
      this.$gtag.event("outbound-click", {href: this.href})
    }
  }
}
</script>

<style scoped>

</style>
