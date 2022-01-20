<template>
  <v-app>
    <menu-navbar />
    <router-view style="margin-top: 62px" />
  </v-app>
</template>

<script>

export default {
  components: {
    MenuNavbar: () => import('@/components/core/MenuNavbar')
  }
}

</script>