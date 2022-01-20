<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :loading="loading"
      class="mx-auto my-4 cursor-pointer"
      :class="{ 'on-hover-poke-card': hover }"
      :elevation="hover ? 12 : 3"
      max-width="280"
    >
      <template slot="progress">
        <v-progress-linear
          color="primary"
          height="10"
          indeterminate
        />
      </template>
      <v-img
        height="250"
        contain
        :src="urlImagePoke"
      />
      <div class="ml-4">
        <v-label>Nº{{number}}</v-label>
      </div>
      <v-card-title>{{name}}</v-card-title>
      <v-card-text>
        <v-chip-group>
          <v-chip v-for="(type, i) in types"
            :key="i"
            style="pointer-events: none"
            :class="`type-${type.type.name}`"
          >
            {{type.type.name}}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import PokeAPIService from '@/services/PokeAPIService';

export default {
  props: {
    number: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },

  data: () => ({
    urlImagePoke: '',
    types: {},

    loading: false
  }),

  created() {
    this.getInfoPokemon(this.name);
  },
  
  methods: {
    /**
     * Setá nas variáveis urlImagePoke && types a imagem do pokemon e seus respectivos tipos
     */
    getInfoPokemon(name) {
      this.loading = true;

      PokeAPIService.getPokemonInfo(name)
      .then(response => {
        let rData = response.data;
        this.urlImagePoke = rData.sprites.other['official-artwork'].front_default;
        this.types = rData.types;
      })
      .catch(() => this.$toast.error('Erro ao recuperar informações do pokemon.', '',{position:'topRight'}))
      .finally(this.loading = false);
    }
  }
}
</script>

<style>
.on-hover-poke-card {
  transform: scale(1.05) !important;
}
</style>