<template>
  <div class="wrapper">
    <vue-loaders-ball-spin-fade-loader
      v-if="loading"
      class="loader"
      color="black"
      scale="1"
    ></vue-loaders-ball-spin-fade-loader>
    <div v-else>
      <FilterPosts @searchByTag="filterBy" />
      <Sort @sort="sortBy" />
      <ul class="list">
        <PostItem
          class="list-item"
          v-for="item in currentPosts"
          :key="item.id"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostItem from "../components/PostItem.vue";
import Sort from "../components/Sort.vue";
import FilterPosts from "../components/FilterPosts.vue";

export default {
  name: "PostsList",
  components: {
    PostItem,
    Sort,
    FilterPosts
  },
  data() {
    return {
      sortByParams: null,
      filterByTags: null,
      loading: false
    };
  },
  computed: {
    ...mapGetters(["POSTS"]),
    currentPosts() {
      if (!this.sortByParams && !this.filterByTags) {
        return this.POSTS;
      }
      return [...this.POSTS]
        .filter(item => {
          if (this.filterByTags) {
            return item.tags.includes(this.filterByTags);
          }
          return item;
        })
        .sort((a, b) => {
          if (this.sortByParams === "comments") {
            return b.comments - a.comments;
          }
          if (this.sortByParams === "likes") {
            return b.likes - a.likes;
          }
        });
    }
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("GET_POSTS");
    this.loading = false;
  },
  methods: {
    sortBy(value) {
      this.sortByParams = value;
    },
    filterBy(value) {
      this.filterByTags = value;
    }
  }
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &-item {
    width: 21%;
    margin-bottom: 20px;
    border: 1px solid black;
  }
}
</style>
