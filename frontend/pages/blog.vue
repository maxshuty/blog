<template>
  <div>
    <!-- TODO: Max P - Breadcrumbs -->
    <card-comp>
      <h1 class="text-center">{{ blog.title }}</h1>
        <div
          v-if="blog.body"
          v-html="$md.render(blog.body)" />
    </card-comp>
  </div>
</template>

<script>
import blogQuery from '../apollo/queries/blog/blog.gql';
import CardComp from '../components/ui-helpers/Card.vue';

export default {
    name: 'Blog',
    components: {
        CardComp
    },
    data() {
        return {
            blog: Object
        };
    },
    // TODO: Max P - it would be awesome to move these queries to actions in the store...
    // see (about half way down): https://lmiller1990.github.io/electic/posts/integrating_apollo_with_vue_and_vuex.html?source=post_page---------------------------
    apollo: {
        blog: {
            prefetch: true,
            query: blogQuery,
            variables() {
                return { id: this.$route.params.id };
            }
        }
    }
};
</script>
