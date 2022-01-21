<template>
  <div>
    <!-- visualização mobile || resoluções menores -->
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      color="primary"
      app
      dark
    >
      <v-list nav color="primary">
        <v-list-item
          v-for="item in barItems"
          :key="item.title"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- visualização desktop || resoluções maiores -->
    <v-app-bar
      app
      flat
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue-grey darken-1"
      elevate-on-scroll
    >
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row
          align="center"
          justify="space-between"
          :no-gutters="!$vuetify.breakpoint.smAndUp"
        >
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              v-if="!$vuetify.breakpoint.smAndUp"
            />
            <v-toolbar-title
              style="cursor: pointer"
              class="font-weight-bold text-h5 primary--text"
              @click="$router.push('/')"
            >
              <v-icon large color="white">mdi-pokeball</v-icon>POKÉ<span class="white--text">DEX</span>
            </v-toolbar-title>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.smAndUp">
            <v-btn
              v-for="(item, i) in barItems"
              :key="i"
              text
              :to="item.to"
              exact-active-class="accent--text"
              exact
              color="white"
              >
                {{ item.title }}
            </v-btn>
          </v-col>
          <v-col class="text-right" v-if="$vuetify.breakpoint.smAndUp">
            <v-text-field
              class="ml-auto mt-4 search-general-style"
              append-icon="mdi-magnify"
              label="Pesquisar"
              single-line
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    barItems: [
      {
        title: "Pokédex",
        to: "/pokedex",
      },
      {
        title: "Créditos",
        to: "/creditos",
      },
    ],
  }),
};
</script>

<style>
.search-general-style {
  max-width: 250px !important;
}

.search-general-style label,
.search-general-style i {
  color: white !important;
}

.search-general-style .v-input__slot:before {
  border-color: white !important;
}

</style>