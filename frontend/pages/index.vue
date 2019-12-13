<template>
  <div>
    <search-comp @input="searchInput" />
    <v-row align="center" justify="center">
      <div v-for="blog in filteredBlogs" :key="blog.id">
        <v-col cols="12">
          <card-comp :title="blog.title" :body="blog.body">
            <button-comp
              :content="'View Blog'"
              @click="goToBlog(blog.id)" />
          </card-comp>
        </v-col>
      </div>
    </v-row>

    <div v-if="filteredBlogs.length == 0">
      <p>No blogs found</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mutationTypes } from '../store/blogs.js';
import blogsQuery from '../apollo/queries/blog/blogs.gql';
import categoriesQuery from '../apollo/queries/category/categories.gql';
import ButtonComp from '../components/ui-helpers/Button.vue';
import CardComp from '../components/ui-helpers/Card.vue';
import SearchComp from '../components/Search.vue';

export default {
    components: {
        ButtonComp,
        CardComp,
        SearchComp
    },
    data() {
        return {
            blogs: [],
            searchQuery: '',
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
                return this.searchQuery
                    ? blog.title
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                    : blog;
            });
        }
    },
    created() {
        this.setBlogs(this.blogs);
        this.setCategories(this.categories);
    },
    methods: {
        ...mapMutations({
            setBlogs: mutationTypes.SET_BLOGS,
            setCategories: mutationTypes.SET_CATEGORIES
        }),
        searchInput(input) {
            this.searchQuery = input;
        },
        goToBlog(id) {
            const path = `blog/${id}/`;
            this.$router.push(path);
        }
    }
};
</script>
