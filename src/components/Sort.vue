<template>
	<div class="sort">
		<div class="sort-container">
			<input 
				v-model="sortByComments"
				type="radio" 
				id="comments" 
				name="radio" 
				class="sort-container-input"
				@change="sortBy('comments')"
			>
			<label for="comments" class="sort-container-label">Sort by comments</label>
			<input 
				v-model="sortByLikes"
				type="radio" 
				id="likes" 
				name="radio" 
				class="sort-container-input"
				@change="sortBy('likes')"
			>
			<label for="likes" class="sort-container-label">Sort by likes</label>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Sort',
  data() {
      return {
		  sortByComments: false,
		  sortByLikes: false,
      }
  },
  methods:{
	  sortBy(value) {
		  this.$emit('sort', value);
	  }
  }
}
</script>

<style scoped lang="scss">
	.sort{
		margin-bottom: 20px;
		&-container{
			display: flex;
			align-items: center;
			&-label{
				&:first-of-type{
					margin-right: 20px;
				}
			}
			&-input{
				margin-right: 10px;
			}
		}
	}
</style>