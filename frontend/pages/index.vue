<template>
  <div>
    <search-comp @input="searchInput" />
    <v-row align="center" justify="center">
      <div v-for="blog in filteredBlogs" :key="blog.id">
        <v-col cols="12">
          <card-comp :title="blog.title" :body="blog.body" />
        </v-col>
      </div>
    </v-row>

    <div v-if="filteredBlogs.length == 0">
      <img src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png" height="800" width="800">
      <p>No blogs found</p>
    </div>
  </div>
</template>

<script>
import blogsQuery from '../apollo/queries/blog/blogs.gql';
import categoriesQuery from '../apollo/queries/category/categories.gql';
import CardComp from '../components/ui-helpers/Card.vue';
import SearchComp from '../components/Search.vue';

export default {
  components: {
    CardComp,
    SearchComp
  },
  data() {
    return {
      blogs: [],
      query: '',
      categories: []
    };
  },
  apollo: {
    blogs: {
      prefetch: true,
      query: blogsQuery
    },
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) => {
        return this.query ? blog.title.toLowerCase().includes(this.query.toLowerCase()) : blog;
      });
    }
  },
  methods: {
    searchInput(input) {
      this.query = input;
    }
  }
};
</script>
