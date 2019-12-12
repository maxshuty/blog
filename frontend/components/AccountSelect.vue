<template>
  <div class="text-center">
    <v-menu
      :disabled="disabled"
      :open-on-hover="openOnHover"
      :close-on-content-click="closeOnContentClick">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" />
      </template>
      <v-list>
        <div v-if="!username">
          <v-list-item>
            <a href="/users/register">Register</a>
          </v-list-item>
          <v-list-item>
            <a href="/users/login">Login</a>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    name: 'AccountSelectComp',
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            openOnHover: false,
            closeOnContentClick: true
        };
    },
    computed: {
        username() {
            // TODO: Max 12/5/19 - use mapGetters...
            return 'Not working';
        }
    }
};
</script>
