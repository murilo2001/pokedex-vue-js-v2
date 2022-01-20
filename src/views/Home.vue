<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
        <v-flex v-for="(name, i) in items" :key="i" xs12 sm4 md3 lg3 v-bind="lgBreakPoint">
            <poke-card :number="zeroPad(i+1)" :name="name" />
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PokeAPIService from '@/services/PokeAPIService';

export default {
  components: {
    PokeCard: () => import('@/components/PokeCard.vue'),
  },

  data: () => ({
    page: 1,
    items: []
  }),

  created() {
    this.getPokemons();
  },

  computed: {
    /**
     * Corrige responsividade do breakpoint LG '1264px > < 1904px*'
     */
    lgBreakPoint() {
      if (this.$vuetify.breakpoint.width >= '1450') {
        return { lg2: true };
      } else {
        return { lg3: true };
      }
    },
  },

  methods: {
    /**
     * Setá na várivel items array contendo o nome do todos pokemons da página atual (this.page)
     */
    getPokemons() {
      PokeAPIService.getPokemons(this.page)
      .then(response => {
        let rData = response.data.results;
        this.items = rData.map(pokemon => pokemon['name']);
      })
      .catch(() => this.$toast.error('Erro ao recuperar pokemons.', '',{position:'topRight'}))
    },

    /**
     * Adiciona zeros a esquerda do número
     */
    zeroPad(num) {
      return num.toString().padStart(3, "0");
    }
  },
}
</script>