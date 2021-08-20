<template>
  <div class="wrapper">
    <vue-loaders-ball-spin-fade-loader
      v-if="loading"
      class="loader"
      color="black"
      scale="1"
    ></vue-loaders-ball-spin-fade-loader>
    <div class="post" v-else>
      <div class="post-image-container">
        <img :src="POST.webformatURL" alt="post-image" class="post-img" />
        <ul class="post-tags">
          <li class="post-tags_item" v-for="tag in tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </div>
      <div class="post-data">
        <div class="post-data_user">
          <img
            :src="POST.userImageURL"
            alt="user-image"
            class="post-data_user-img"
          />
          <p class="post-data_user-name">{{ POST.user }}</p>
        </div>
        <div class="post-data_item-container">
          <div class="post-data_item">
            <p class="post-data_item-text">Likes:</p>
            <div class="post-data_item-info">{{ POST.likes }}</div>
          </div>
          <div class="post-data_item">
            <p class="post-data_item-text">Comments:</p>
            <div class="post-data_item-info">{{ POST.comments }}</div>
          </div>
          <div class="post-data_item">
            <p class="post-data_item-text">Views:</p>
            <div class="post-data_item-info">{{ POST.views }}</div>
          </div>
          <div class="post-data_item">
            <p class="post-data_item-text">Downloads:</p>
            <div class="post-data_item-info">{{ POST.downloads }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostPage",
  components: {},
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters(["POST"]),
    tags() {
      return this.POST.tags.split(", ");
    }
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("GET_POST_BY_ID", this.$route.params);
    this.loading = false;
  }
};
</script>

<style scoped lang="scss">
.post {
  display: flex;
  justify-content: space-between;
  &-img {
    width: 100%;
  }
  &-tags {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 100;
    text-align: left;
    font-size: 16px;
    text-transform: capitalize;
    transition: 0.3s;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);
    overflow: hidden;
    padding: 10px 30px;
    &_item {
      margin-right: 10px;
      color: #fff;
    }
  }
  &-data_item-container {
    margin: 20px 0;
    padding: 16px 0 14px;
    border: 1px solid #eeeff2;
    border-left: 0;
    border-right: 0;
  }
  &-image-container {
    width: 60%;
    position: relative;
    z-index: 101;
    &:hover > .post-tags {
      opacity: 1;
      transition: 0.2s ease-in-out;
    }
  }
  &-data {
    width: 30%;
    &_item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
      &-info {
    		display: inline-block;
        text-align: center;
        vertical-align: middle;
        padding: 5px 15px;
        width: 28%;
        font-size: 13px;
        max-width: 100px;
        color: #fff !important;
        background-color: #008ddf !important;
        border-radius: 50px;
      }
    }
    &_user {
      display: flex;
      align-items: flex-start;
      &-img {
        width: 48px;
        height: 48px;
        border-radius: 48px;
        margin: 0 12px 0 0;
      }
    }
  }
}
</style>
