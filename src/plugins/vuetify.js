import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@/sass/overrides.sass';

Vue.use(Vuetify);

const theme = {
  primary: '#F8433F'
}

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
        light: theme,
      },
    },
    icons: {
      values: {
        //
      }
    },
});