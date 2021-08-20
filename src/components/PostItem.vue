<template>
  <div class="post-item">
    <router-link :to="{ path: '/' + this.item.id }">
      <img :src="item.previewURL" :alt="item.tags" class="post-item_picture" />
    </router-link>
    <div class="post-item-container">
      <p class="post-item-container_description">
        Comments: <span>{{ item.comments }}</span>
      </p>
      <p class="post-item-container_description">
        Likes: <span>{{ item.likes }}</span>
      </p>
      <ul class="post-item-container-tags" @dblclick="showEdit = !showEdit">
        <li
          class="post-item-container-tags_item"
          v-for="tag in tags"
          :key="tag"
        >
          <DeleteTag
            v-if="showEdit"
            class="post-item-container-tags_item-delete"
            @deleteItem="deleteTag"
            :tag="tag"
            :id="item.id"
          />
          <p>{{ tag }}</p>
        </li>
        <AddNewTag
          v-if="showEdit"
          @addTag="addTag" 
          :id="item.id" 
        />
      </ul>
    </div>
  </div>
</template>

<script>
import DeleteTag from "./DeleteTag.vue";
import AddNewTag from "./AddNewTag.vue";

export default {
  name: "PostItem",
  components: {
    DeleteTag,
    AddNewTag
  },
  props: {
    item: {
      required: true
    }
  },
  data() {
    return {
      showEdit: false,
      newTag: ""
    };
  },
  computed: {
    tags() {
      return this.item.tags.split(", ");
    }
  },
  methods: {
    addTag(text, id) {
      this.$store.dispatch("ADD_TAG", { text: text, id: id });
    },
    deleteTag(tag, id) {
      this.$store.dispatch("DELETE_TAG", { tag: tag, id: id });
    }
  }
};
</script>

<style scoped lang="scss">
.post-item {
  &_picture {
    height: 150px;
    display: block;
    width: 100%;
  }
  &-container {
    padding: 15px 15px 5px;
    text-align: start;
    &_description {
      margin-bottom: 10px;
      font-size: 14px;
      color: #4f4f4f;
      span {
        color: #95c221;
      }
    }
    &-tags {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &_item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        min-width: 46%;
        position: relative;
        margin-bottom: 10px;
        background-color: #95c221;
        border-radius: 40px;
        padding: 5px 10px;
        text-align: center;
        border: 1px solid #4d611f;
      }
    }
  }
}
</style>
