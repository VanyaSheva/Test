<template>
  <div class="add-container">
    <input
      type="text"
      class="add-container-input"
      placeholder="Add new tag"
      v-model="newTag"
    />
    <button
      class="add-container-button"
      type="button"
      @click="addTag"
    >
      Add tag
    </button>
  </div>
</template>

<script>
export default {
  name: "AddNewTag",
  props:{
		id: {
			require: true
		},
	},
  data() {
    return {
      newTag: null,
    };
  },
  methods: {
    addTag() {
      if(this.newTag) {
        this.$emit('addTag', this.newTag, this.id);
      }
      this.newTag = null;
    }
  }
};
</script>

<style scoped lang="scss">
.add-container {
  padding: 10px 0;
  border-top: 1px solid #868789;
  &-input {
    padding: 5px 10px;
    width: 100%;
    margin-bottom: 10px;
  }
  &-button {
    border: none;
    padding: 7px;
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: white;
    font-weight: 400;
    background-color: #5f4785;
  }
}
</style>
