<template>
  <v-container class="blog-container">
    <v-row>
      <v-col cols="12">
        <!-- TODO: Max P - Breadcrumbs -->
        <div class="title-container">
          <h1 class="display-3 font-weight-thin">
            {{ blog.title }}
          </h1>
          <div v-if="blog.authors && blog.authors.length > 0" class="mt-5">
            <div
              v-for="(author, index) in blog.authors"
              :key="`${author.firstName}-${index}`"
              class="caption">
              {{ `${author.firstName || ''} ${author.lastName || ''} ${author.relationship ? '- ' + author.relationship : ''}` }}
            </div>
          </div>
          <div v-if="blog.date" class="caption">
            {{ getFormattedDate(blog.date) }}
          </div>
        </div>
        <div
          v-if="blog.body"
          class="mt-10 blog-body font-weight-light"
          v-html="$md.render(blog.body)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import blogQuery from '../apollo/queries/blog/blog.gql';

export default {
    name: 'Blog',
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
    },
    methods: {
        getFormattedDate(dateString) {
            const date = new Date(dateString);
            return (date.toLocaleDateString('en-us', { weekday: 'long' }) +
                    ' | ' +
                    date.toLocaleDateString('en-us', { month: 'short' }) +
                    ' · ' +
                    date.getDate() +
                    ' · ' +
                    date.getFullYear());
        }
    }
};
</script>

<style scoped>
.blog-container {
    max-width: 680px;
}

.blog-body {
    font-size: 21px;
    color: #000000;
}
</style>
