<template>
  <v-app>
    <header-comp />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <footer-comp />
  </v-app>
</template>

<script>
import HeaderComp from '../components/Header.vue';
import FooterComp from '../components/Footer.vue';

export default {
  components: {
    HeaderComp,
    FooterComp
  }
};
</script>
